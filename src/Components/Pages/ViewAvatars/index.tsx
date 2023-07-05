import React, {useCallback, useState} from "react";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {AvatarsData} from "./modal/avatarsData";
import ButtonUI from "../../MAl/Components/ButtonUI";
import {ListMapVerticalUI} from "../../MAl/Components/ListMapVerticalUI";
import {ImageTextTitleBody, StatusInput} from "./styled";
import {BackIcon} from "../../../media/icons";
import {AssetShow} from "./ui/AvatarShow";
import {dataAvatarType} from "../../../Backend/types";
import {CheckDataAvatarAction} from "./modal/checkDataAvatarAction";
import img from "../../../media/01.png";
import {StatusShow} from "./ui/StatusShow";

type ViewAvatarsType = {

}

const ViewAvatars: React.FC<ViewAvatarsType> = ({}) => {

    const [selectedId, setSelectedId] = useState<dataAvatarType | boolean>(false);
    const [sucStatus, setSucStatus] = useState<boolean | {id: string, discord: string, status: string}>(false);
    const [statusId, setStatusId] = useState("");

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


    return (
        <BodyUI>
            <PanelUI name={ImageTitle()}>
                <StatusInput
                    disable={!!sucStatus}
                    onChange={setStatusId}
                    hint={'Check status'}
                />
                <ListMapVerticalUI>
                    {AvatarsData.map((data: dataAvatarType, index ) => (
                        <ButtonUI key={index} onClick={() => setSelectedId(data)} text={data.name} />
                    ))}
                </ListMapVerticalUI>
            </PanelUI>
            {selectedId && <AssetShow
                onClose={() => setSelectedId(false)}
                data={typeof selectedId === "boolean" ? {} as dataAvatarType : selectedId}
            />}
            {!!sucStatus && typeof sucStatus != "boolean" && <StatusShow data={sucStatus} onClose={() => {
                setSelectedId(false);
                setSucStatus(false);

            }} />}
        </BodyUI>
    )
}

export default ViewAvatars;