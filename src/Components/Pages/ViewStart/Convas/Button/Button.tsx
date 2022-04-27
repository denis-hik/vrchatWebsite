import React from "react";

import {Body} from './styled'
import {NavLink} from "react-router-dom";

interface propsI {
    text: string,
    url: string,
}

const Button = (props:propsI):JSX.Element => {

    return (
        <Body>
            <NavLink to={props.url} >
                <h4>{props.text}</h4>
            </NavLink>
        </Body>
    )
};

export default Button