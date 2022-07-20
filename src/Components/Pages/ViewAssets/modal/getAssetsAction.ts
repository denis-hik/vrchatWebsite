import {dataAssetType} from "../index";
import {REQUEST_SERVER} from "../../../../Backend/types";

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
        .then(function (data) {
            console.log(data.result)
            successCallback(data.result)
        })
        .catch(function (error) {
            errorCallback();
        })
}