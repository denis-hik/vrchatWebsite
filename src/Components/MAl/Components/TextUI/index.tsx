import {Body} from "./styled";
import React from "react";

type propsType = {
    text: string
    className?: string;
    onClick?: () => void;
}

const TextUI = ({text, className, onClick}:propsType) => {

    return (
        <Body onClick={onClick} className={className}>
            <h3>{text}</h3>
        </Body>
    )
};

export default TextUI;