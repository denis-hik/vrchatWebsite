import React, {useCallback, useEffect, useState} from "react";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {AvatarsData} from "./modal/avatarsData";
import ButtonUI from "../../MAl/Components/ButtonUI";
import {ListMapVerticalUI} from "../../MAl/Components/ListMapVerticalUI";
import {ImageTextTitleBody, StatusHint, StatusInput} from "./styled";
import {BackIcon} from "../../../media/icons";
import {AssetShow} from "./ui/AvatarShow";
import {dataAvatarType} from "../../../Backend/types";
import img from "../../../media/01.png";
import {StatusShow} from "./ui/StatusShow";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../context/store";
import {AvatarsPageContextProvider} from "./modal/context";
import {getAvatar} from "./modal/actions/getAvatar";
import {clearData} from "./modal/reducers/avatarsSlice";

type ViewAvatarsType = {
}

const assetsSelector = (root:RootState) => Object.values(root.assets.data)
const currentSelector = (root:RootState) => root.avatars.current.avatar

const ViewAvatars: React.FC<ViewAvatarsType> = () => {
    const dispatch = useAppDispatch()

    const [selectedId, setSelectedId] = useState<dataAvatarType | boolean>(false);
    const [statusHint, setStatusHint] = useState<dataAvatarType | boolean>(false);
    const [statusId, setStatusId] = useState<string>("");

    const assets = useSelector(assetsSelector)
    const current = useSelector(currentSelector)

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

    const clearCurrent = () => {
        dispatch(clearData())
        setSelectedId(false)
        setStatusId("")
    }

    React.useEffect(() => {
        const getData = setTimeout(() => {
            if (statusId.length > 0) {
               dispatch(getAvatar({id: statusId}))
            }
        }, 500);

        return () => clearTimeout(getData)
    }, [statusId]);


    return (
        <AvatarsPageContextProvider>
            <BodyUI>
                <PanelUI name={ImageTitle()}>
                    <div style={{position: "relative"}}>
                        <StatusInput
                            disable={!!current}
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
                {selectedId && !current && <AssetShow
                    assets={assets}
                    onClose={() => setSelectedId(false)}
                    data={typeof selectedId === "boolean" ? {} as dataAvatarType : selectedId}
                />}
                {!!current && <StatusShow data={current} onClose={clearCurrent} />}
            </BodyUI>
        </AvatarsPageContextProvider>
    )
}

export default ViewAvatars;