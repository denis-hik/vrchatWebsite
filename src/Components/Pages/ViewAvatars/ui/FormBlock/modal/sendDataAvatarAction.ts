import {dataAssetType, REQUEST_SERVER} from "../../../../../../Backend/types";

type SendDataAvatarActionType = {
    data: {
        discord: string
        type: ["Nardoragon", "Rexouium", "Kitavali", "Sergal", "Canine", "Other"],
        url: string,
        work: number,
    }
    SuccessCallback: (data: {id: string, discord: string, status: string}) => void
    ErrorCallback: (e: string) => void
}

export const SendDataAvatarAction = ({ErrorCallback, SuccessCallback, data}: SendDataAvatarActionType) => {
    fetch(`${REQUEST_SERVER}vrcat/avatars`, {method: "POST", body: JSON.stringify(data), mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
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