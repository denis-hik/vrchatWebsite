import {dataAssetType, REQUEST_SERVER_GUMROAD} from "../../../../Backend/types";

type Type = {
    successCallback: (data: dataAssetType[]) => void;
    errorCallback: () => void;
}

export const getAssetsGumroadAction = (
    {
        successCallback,
        errorCallback,
    }: Type
) => {
    fetch(`${REQUEST_SERVER_GUMROAD.url}products/search?user_id=${REQUEST_SERVER_GUMROAD.id}3&format=json`,{
        headers: {
            "Content-Type": "application/json"
        }})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const products = data?.products;
            const productsSend: dataAssetType[] = [];
            console.log(data)
            if (!!products?.length) {
                for (let i = 0; i < products?.length; i++) {
                    const product = products[i];
                    productsSend.push({
                        name: product?.name || "Нет имени",
                        image: product?.thumbnail_url || "",
                        download: `https://app.gumroad.com/products/${product?.permalink}`,
                        id: product?.id,
                        des: "",
                        tags: ["my"],
                        images: !!product?.covers.length ? product?.covers
                            .filter((cover) => cover.filetype !== "mov")
                            .map((cover) => (cover.original_url)) : []
                    });
                }
                successCallback(productsSend);
            } else {
                errorCallback();
            }
        })
        .catch(function (error) {
            errorCallback();
        });
}