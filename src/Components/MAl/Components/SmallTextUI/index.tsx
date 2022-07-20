import {Body} from "./styled";
import React from "react";

type propsType = {
    text: string;
    color?: string;
    height?: string | number
}

const SmallTextUI = ({text, color = 'grey', height = 'unset'}:propsType) => {

    return (
        <Body style={{height: height}}>
            <span style={{color: color}}>{text}</span>
        </Body>
    )
};

export default SmallTextUI;