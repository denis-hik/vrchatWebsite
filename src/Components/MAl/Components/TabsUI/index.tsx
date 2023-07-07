import React from "react";
import {Body} from "./styled";
import ItemTab from "./ui/ItemTab";

type TabsType = {
    options: string[]
    selected: string;
    onChange?: (id: string) => void;
    disable?: boolean;
    colors?: string[]
}

const TabsUI: React.FC<TabsType> = ({options, colors, disable, selected, onChange}) => {

    const handleClickTab = (index) => {
        onChange && !disable && onChange(options[index]);
    }

    return (
        <Body colors1={colors}>
            {options.map((text, index) => (
                <ItemTab isActive={selected === text} text={text} onClick={() => handleClickTab(index)} color={colors && colors[index]} />
            ))}
        </Body>
    )
}

export default TabsUI;