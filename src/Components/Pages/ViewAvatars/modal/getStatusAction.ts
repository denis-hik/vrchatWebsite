import {dataAssetType, REQUEST_SERVER} from "../../../../Backend/types";

type getStatusActionType = {
    id: string;
    successCallback: () => void;
    errorCallback: () => void;
}
export const getStatusAction = ({id, errorCallback, successCallback}: getStatusActionType) => {
    fetch(`${REQUEST_SERVER}vrchat/avatars/${id}`, {mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function (response) {
            return response.json();
        })
        .then(function ({result: data}) {
            if (data.indexOf("success") > -1) {

            } else {
                errorCallback();
            }
        })
        .catch(function (error) {
            errorCallback();
        });
}