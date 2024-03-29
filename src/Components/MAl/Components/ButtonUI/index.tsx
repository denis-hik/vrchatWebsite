import {Body, Tags} from "./styled";
import React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";

type PropsI = {
    text: string;
    onClick?: () => void
    image?: string;
    disable?: boolean;
    outline?: boolean;
    tags?: string[],
    bottom?: boolean,
    height?: number,
    icon?: string,
    className?: string,
    width?: string,
    link?: string,
}

const Button: React.FC<PropsI> = (
    {
        className,
        bottom,
        text,
        onClick,
        disable,
        image,
        outline,
        tags,
        height,
        icon,
        width,
        link
    }
) => {

    if (link) {
        return (
            <Body
                disable={disable}
                Bottom={bottom}
                className={classNames(
                    outline ? 'outline' : 'notoutline',
                    icon && 'icon',
                    className
                )}
                style={{width, height}}>
                <Link className={"link"} to={`/avatars`}  >{text}</Link>
            </Body>
        )
    }

    return (
        <Body
            disable={disable}
            Bottom={bottom}
            className={classNames(
                outline ? 'outline' : 'notoutline',
                icon && 'icon',
                className
            )}
            style={{width, height}}
            onClick={onClick}
        >
            {image && <img className={'image-img'} src={image} alt={'button_image'}/>}
            {icon && <img className={'icon-img'} src={icon} alt={'button_icon'}/> }
            {text && <h4>{text}</h4>}
            <Tags>{tags && tags.map((text) => (<span>{text.replace('"', "").replace('"', "")}</span>))}</Tags>
        </Body>
    )
}

export default Button