import React from "react";

import {Body} from './styled'
import {NavLink} from "react-router-dom";

interface propsI {
    text: string,
    url: string,
    color?: string
}

const Button = (props:propsI):JSX.Element => {

    return (
        <Body color={props.color} className={"buttons-mai"}>
            {props.url.includes("http")
                ? <a target={"_blank"} href={props.url}>
                    <h4>{props.text}</h4>
                </a>
                : <NavLink to={props.url}>
                    <h4>{props.text}</h4>
                </NavLink>
            }
        </Body>
    )
};

export default Button