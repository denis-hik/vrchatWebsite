import React from "react";
import {Body} from "./styled";

type ItemTabType = {
    text: string
    onClick?: () => void;
    color?: string;
    isActive?: boolean;
}
const ItemTab: React.FC<ItemTabType> = ({text, color, onClick, isActive}) => {

    return (
        <Body isActive={isActive} color={color} onClick={onClick}>
            <b>{text}</b>
        </Body>
    )
}

export default ItemTab;