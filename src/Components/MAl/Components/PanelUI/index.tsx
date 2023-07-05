import {Body} from "./styled";
import TextUI from "./../TextUI";
import React, {useCallback} from "react";

type PanelUIType = {
    name?: string | React.FC | React.ReactNode
}

const PanelUI: React.FC<PanelUIType> = ({name, children}) => {

    const onBack = useCallback(() => {
        history.back();
    }, []);

    return (
        <Body>
            <div className={'panel'}>
                {typeof name === "string" ? <TextUI onClick={onBack} className={'backText'} text={name || ''}/> : name}
                {children}
            </div>
        </Body>
    )
};

export default PanelUI