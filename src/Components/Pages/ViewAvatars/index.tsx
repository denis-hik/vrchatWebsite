import React, {useCallback, useEffect, useState} from "react";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {AvatarsData} from "./modal/avatarsData";
import ButtonUI from "../../MAl/Components/ButtonUI";
import {ListMapVerticalUI} from "../../MAl/Components/ListMapVerticalUI";
import {ImageTextTitleBody, StatusHint, StatusInput} from "./styled";
import {BackIcon} from "../../../media/icons";
import {AssetShow} from "./ui/AvatarShow";
import {dataAssetType, dataAvatarType} from "../../../Backend/types";
import {CheckDataAvatarAction} from "./modal/checkDataAvatarAction";
import img from "../../../media/01.png";
import {StatusShow} from "./ui/StatusShow";
import {useQuery} from "../../../Backend/useQuery";
import {useSelector} from "react-redux";
import {RootState} from "../../../context/store";

type ViewAvatarsType = {
}

const assetsSelector = (root:RootState) => Object.values(root.assets.data)

const ViewAvatars: React.FC<ViewAvatarsType> = () => {

    const [selectedId, setSelectedId] = useState<dataAvatarType | boolean>(false);
    const [statusHint, setStatusHint] = useState<dataAvatarType | boolean>(false);
    const [sucStatus, setSucStatus] = useState<boolean | {id: string, discord: string, type: string, status: string, isQuest: boolean, url: string, work: string}>(false);
    const [statusId, setStatusId] = useState<string>("");
    const query = useQuery();

    const assets = useSelector(assetsSelector)

    const ImageTitle = () => {

        const onBack = useCallback(() => {
            history.back();
        }, []);

        return (
                <ImageTextTitleBody>
                    <img src={img} />
                    <span>Avatars</span>
                    <div className={"hover_back"} onClick={onBack}>
                        {BackIcon({size: 50})}
                    </div>
                </ImageTextTitleBody>
            )
    }
    React.useEffect(() => {
        const getData = setTimeout(() => {
            if (statusId.length > 0) {
                CheckDataAvatarAction({
                    SuccessCallback: (data) => {
                        setSelectedId(false);
                        setSucStatus(data);
                    },
                    ErrorCallback: () => {},
                    id: statusId,
                })
            }
        }, 500);

        return () => clearTimeout(getData)
    }, [statusId]);

    useEffect(() => {
        console.log(query);
    }, [query]);


    return (
        <BodyUI>
            <PanelUI name={ImageTitle()}>
                <div style={{position: "relative"}}>
                    <StatusInput
                        disable={!!sucStatus}
                        onChange={setStatusId}
                        hint={'Check status'}
                        value={statusId}
                        onBlur={() => setTimeout(() => setStatusHint(false), 100)}
                        onFocus={() => setStatusHint(true)}
                    />
                    {statusHint && !!localStorage.getItem("workAssetId")?.length && <StatusHint onClick={(e) => {
                        const id = localStorage.getItem("workAssetId") || "";
                        setStatusId(id);
                    }}>
                        <b>{localStorage.getItem("workAssetName")}</b>
                        <span>id: {localStorage.getItem("workAssetId")}</span>
                    </StatusHint>}
                </div>

                <ListMapVerticalUI>
                    {AvatarsData.map((data: dataAvatarType, index ) => (
                        <ButtonUI key={index} onClick={() => setSelectedId(data)} text={data.name} />
                    ))}
                </ListMapVerticalUI>
            </PanelUI>
            {selectedId && !sucStatus && <AssetShow
                assets={assets}
                onClose={() => setSelectedId(false)}
                data={typeof selectedId === "boolean" ? {} as dataAvatarType : selectedId}
            />}
            {!!sucStatus && typeof sucStatus != "boolean" && <StatusShow data={sucStatus} onClose={() => {
                setSelectedId(false);
                setSucStatus(false);
                setStatusId("");
            }} />}
        </BodyUI>
    )
}

export default ViewAvatars;