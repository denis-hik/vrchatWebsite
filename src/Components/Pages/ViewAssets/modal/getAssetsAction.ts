import {dataAssetType, REQUEST_SERVER} from "../../../../Backend/types";

type Type = {
    successCallback: (data: dataAssetType[]) => void;
    errorCallback: () => void;
}

export const getAssetsAction = (
    {
        successCallback,
        errorCallback,
    }: Type
) => {
    fetch(`${REQUEST_SERVER}vrchat/assets`, {mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function (response) {
            return response.json();
        })
        .then(function ({result: data}) {
            const res: dataAssetType[] = [];
            console.log(data)
            if (!!data?.length) {
                for (let i = 0; i < data?.length; i++) {
                    const asset = data[i];

                    res.push({
                        name: asset[1],
                        image: asset[3],
                        id: asset[0],
                        download: asset[4],
                        des: asset[2],
                        tags: ["my"],
                        images: [asset[7]]
                    });
                }
                successCallback(res)
            } else {
                errorCallback();
            }
        })
        .catch(function (error) {
            errorCallback();
    });
}