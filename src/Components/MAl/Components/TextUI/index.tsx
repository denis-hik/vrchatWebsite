import {Body} from "./styled";
import React from "react";

type propsType = {
    text: string
    className?: string;
    onClick?: () => void;
    id?:string
}

const TextUI = ({text, className, onClick, id}:propsType) => {

    return (
        <Body id={id} onClick={onClick} className={className}>
            <h3>{text}</h3>
        </Body>
    )
};

export default TextUI;