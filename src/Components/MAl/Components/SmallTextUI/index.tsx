import {Body} from "./styled";
import React, {ComponentProps} from "react";
import {getDark} from "../../Scripts/getDark";

type propsType = {
    text: string;
    color?: string;
    height?: string | number
} & ComponentProps<"div">
const isDark = getDark();
const SmallTextUI = ({text, color = isDark ? 'grey' : "rgba(0,0,0,0.25)", height = 'unset', ...props}:propsType) => {

    return (
        <Body style={{height: height}} {...props as any}>
            <span style={{color: color}}>{text}</span>
        </Body>
    )
};

export default SmallTextUI;