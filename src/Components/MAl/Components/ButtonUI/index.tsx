import {Body, Tags} from "./styled";
import React from "react";
import classNames from "classnames";

type PropsI = {
    text: string;
    onClick?: () => void
    image?: string;
    outline?: boolean;
    tags?: string[],
    bottom?: boolean,
    height?: number,
    icon?: string,
    className?: string,
}

const Button: React.FC<PropsI> = (
    {
        className,
        bottom,
        text,
        onClick,
        image,
        outline,
        tags,
        height,
        icon,
    }
) => {

    return (
        <Body
            Bottom={bottom}
            className={classNames(
                outline ? 'outline' : 'notoutline',
                icon && 'icon',
                className
            )}
            onClick={onClick}
        >
            {image && <img className={'image-img'} src={image} alt={'button_image'}/>}
            {icon && <img className={'icon-img'} src={icon} alt={'button_icon'}/> }
            <h4>{text}</h4>
            <Tags>{tags && tags.map((text) => (<span>{text.replace('"', "").replace('"', "")}</span>))}</Tags>
        </Body>
    )
}

export default Button