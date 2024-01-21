import React from "react";
import {BodyItem} from "./styled";

type ItemAssetsType = {
    image: string
    name: string
    download: string
    avatarValue?: string
    setAvatarValue?: (download: string) => void
    onClose?: () => void
}
const ItemAssets: React.FC<ItemAssetsType> = ({download, onClose, image, name, avatarValue, setAvatarValue}) => {

    return (
        <BodyItem onClick={() => setAvatarValue && setAvatarValue(download === "#" ? image : download)} className={"item"}>
            <img src={image}/>
            <span>{name}</span>
            {(avatarValue === image || avatarValue === download) && <div className={"sel"}>Выбрано</div>}
            {onClose && <div onClick={onClose} className={"close"}></div>}
        </BodyItem>
    )
}

export default ItemAssets