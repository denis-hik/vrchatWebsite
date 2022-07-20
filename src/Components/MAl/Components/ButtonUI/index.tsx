import {Body, Tags} from "./styled";
import React from "react";

type PropsI = {
    text: string;
    onClick?: () => void
    image?: string;
    outline?: boolean;
    tags?: string[],
    bottom?: boolean,
}

const Button: React.FC<PropsI> = ({bottom, text,onClick, image, outline, tags}) => {

    return (
        <Body Bottom={bottom} className={outline ? 'outline' : 'notoutline'} onClick={onClick} >
            {image && <img src={image} alt={'button_image'}/> }
            <h4>{text}</h4>
            <Tags>{tags && tags.map((text) => (<span>{text.replace('"', "").replace('"', "")}</span>))}</Tags>
        </Body>
    )
}

export default Button