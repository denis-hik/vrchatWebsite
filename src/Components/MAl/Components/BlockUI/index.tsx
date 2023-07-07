import React from "react";
import {Body} from "./styled";

type BlockUIType = {
    label?: string
}

const BlockUI: React.FC<BlockUIType> = ({label, children}) => {

    return (
        <Body>
            <span className={"title-block"}>{label}</span>
            {children}
        </Body>
    )
}

export default BlockUI;