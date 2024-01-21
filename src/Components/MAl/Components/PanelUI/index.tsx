import {Body} from "./styled";
import TextUI from "./../TextUI";
import React, {useCallback} from "react";

type PanelUIType = {
    name?: string | React.FC | React.ReactNode
    hideButtonBack?: boolean
}

const PanelUI: React.FC<PanelUIType> = ({name, children, hideButtonBack}) => {

    const onBack = useCallback(() => {
        if (!hideButtonBack)
            history.back();
    }, []);

    return (
        <Body hideButtonBack={hideButtonBack}>
            <div className={'panel'}>
                {typeof name === "string" ? <TextUI onClick={onBack} className={'backText'} text={name || ''}/> : name}
                {children}
            </div>
        </Body>
    )
};

export default PanelUI