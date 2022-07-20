import React from "react";
import {Body} from "./styled";

const ImageUI = ({src}) => {

    return(
        <Body>
            <img src={src} alt={'image_'} />
        </Body>
    )
};
export default ImageUI;