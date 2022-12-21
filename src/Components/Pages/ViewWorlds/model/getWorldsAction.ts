import {REQUEST_SERVER} from "../../../../Backend/types";
import {dataWorldType} from "../../ViewAssets";

type Type = {
    successCallback: (data: dataWorldType[]) => void;
    errorCallback: () => void;
}

export const getWorldsAction = (
    {
        successCallback,
        errorCallback,
    }: Type
) => {
    fetch(`${REQUEST_SERVER}vrchat/author`, {mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            const tmp: dataWorldType[] = []
            const data = JSON.parse(res.result.replaceAll("'", '"'));
            data.list.map((data) => {
                tmp.push({
                    id: data.id,
                    title: data.name,
                    image: data.image,
                    tag: data.tags,
                    fav: data.favorites,
                })
            })
            successCallback(tmp)
        })
        .catch(function (error) {
            errorCallback();
        })
}