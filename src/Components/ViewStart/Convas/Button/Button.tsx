import React from "react";

import style from './Button.module.css'
import {NavLink} from "react-router-dom";

interface propsI {
    text: string,
    url: string,
}

const Button = (props:propsI):JSX.Element => {

    return (
        <div className={style.body}>
            <NavLink to={'/worlds'} style={{color:"white"}} >
                <h4>{props.text}</h4>
            </NavLink>
        </div>
    )
};

export default Button