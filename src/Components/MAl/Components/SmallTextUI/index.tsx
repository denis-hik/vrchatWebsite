import {Body} from "./styled";
import React from "react";
import {getDark} from "../../Scripts/getDark";

type propsType = {
    text: string;
    color?: string;
    height?: string | number
}
const isDark = getDark();
const SmallTextUI = ({text, color = isDark ? 'grey' : "rgba(0,0,0,0.25)", height = 'unset'}:propsType) => {

    return (
        <Body style={{height: height}}>
            <span style={{color: color}}>{text}</span>
        </Body>
    )
};

export default SmallTextUI;