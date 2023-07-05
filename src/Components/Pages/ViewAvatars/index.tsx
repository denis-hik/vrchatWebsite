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
import {getStatusAction} from "./modal/getStatusAction";

type ViewAvatarsType = {

}

const ViewAvatars: React.FC<ViewAvatarsType> = ({}) => {

    const [selectedId, setSelectedId] = useState<dataAvatarType | boolean>(false);
    const [statusId, setStatusId] = useState("");

    const ImageTitle = () => {

        const onBack = useCallback(() => {
            history.back();
        }, []);

        return (
                <ImageTextTitleBody>
                    <img src={"https://files.vrchat.cloud/thumbnails/file_7c0cc300-766a-4d25-9385-d646b99079bf.9cf333ab80eada4773667a6a6b35ac31df780160ac2558b50e71d5ee6626b4bb.5.thumbnail-256.png?Expires=1688032349&Key-Pair-Id=K3JAQ0Y971TV2Z&Signature=at~7D4ueoCWNzdbNTJ8p8Mtxuku-nebjgopDUAVfBzjzK0x8MrqaobA--5FPYm5lsRs4pvcH9nI6vbsrLzrco786~qpaxjUuNNsx~8c87-QKILCAHb4TGHCSmeVYH6Bbsg0HvNCf99Uaw1czSfVjvJkfjb3Ln8U3JmoPhNvG~GbwpE-uoTHFstGf1A-cs19Z0XQ-pacORFfKnJ-nThB4GlPbqM3MeehQ26H1WrMWdM1zEC6QnQb3bC7OFR-Bu2GpBZ9kH5tngvgrcbCl01shpyGnBhnWNXKS5Bp-MRg8-lt8y21mzpLRR1GWafkmzUt6PirQj3WuZw7f8UP6KYqvxg__"} />
                    <span>Avatars</span>
                    <div className={"hover_back"} onClick={onBack}>
                        {BackIcon({size: 50})}
                    </div>
                </ImageTextTitleBody>
            )
    }
    React.useEffect(() => {
        const getData = setTimeout(() => {
            if (statusId.length > 3) {
                getStatusAction({
                    id: statusId,
                    successCallback: () => {},
                    errorCallback: () => {}
                })
            }
        }, 500);

        return () => clearTimeout(getData)
    }, [statusId]);


    return (
        <BodyUI>
            <PanelUI name={ImageTitle()}>
                <StatusInput onChange={(e) => setStatusId(e.target.value)} hint={'Check status'} />
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
        </BodyUI>
    )
}

export default ViewAvatars;