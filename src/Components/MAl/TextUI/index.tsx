import {Body} from "./styled";
import React from "react";

type propsType = {
    text: string
}

const TextUI = ({text}:propsType) => {

    return (
        <Body>
            <h3>{text}</h3>
        </Body>
    )
};

export default TextUI;