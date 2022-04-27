import {Body} from "./styled";
import TextUI from "./../TextUI";
import React from "react";

type PanelUIType = {
    name?: string
}

const PanelUI: React.FC<PanelUIType> = ({name, children}) => {

    return (
        <Body>
            <div className={'panel'}>
                <TextUI text={name || ''} />
                {children}
            </div>
        </Body>
    )
};

export default PanelUI