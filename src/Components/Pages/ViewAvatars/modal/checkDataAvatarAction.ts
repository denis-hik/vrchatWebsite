import {dataAssetType, REQUEST_SERVER} from "../../../../Backend/types";

type SendDataAvatarActionType = {
    id: string;
    SuccessCallback: (data: {id: string, discord: string, status: string}) => void
    ErrorCallback: (e: string) => void
}

export const CheckDataAvatarAction = ({ErrorCallback, SuccessCallback, id}: SendDataAvatarActionType) => {
    fetch(`${REQUEST_SERVER}vrcat/avatars/${id}`, {mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data?.status.indexOf("success") > -1) {
                SuccessCallback({
                    id: data?.result.id,
                    discord: "",
                    status: data?.result?.status
                })
            } else {
                ErrorCallback(data?.error)
            }
        })
        .catch(function (error) {
            ErrorCallback(error.toString());
        });

}