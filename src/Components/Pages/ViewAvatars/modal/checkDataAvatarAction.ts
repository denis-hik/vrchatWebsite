import {dataAssetType, REQUEST_SERVER} from "../../../../Backend/types";

type SendDataAvatarActionType = {
    id: string;
    SuccessCallback: (data: {id: string, discord: string, type: string, status: string, isQuest: boolean, url: string, work: string}) => void
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
                    discord: data?.result?.discord,
                    status: data?.result?.status,
                    work: data?.result?.work,
                    url: data?.result?.url,
                    isQuest: data?.result?.isQuest,
                    type: data?.result?.type,
                })
            } else {
                ErrorCallback(data?.error)
            }
        })
        .catch(function (error) {
            ErrorCallback(error.toString());
        });

}