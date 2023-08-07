import React from "react";
import {Body} from "./styled";

type ImageUItype = {
    src: string;
    onClick?: () => void;
}

const ImageUI: React.FC<ImageUItype> = ({src, onClick}) => {

    return(
        <Body onClick={onClick}>
            <img src={src} alt={'image_'} />
        </Body>
    )
};
export default ImageUI;