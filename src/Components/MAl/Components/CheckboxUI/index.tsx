import React from "react";
import {Body} from "./styled";

type CheckboxUIType = {
    value?: boolean,
    onChange?: (isResult: boolean) => void;
    disable?: boolean;
    label?: string | React.ReactNode;
    error?: string;
    disableText?: string
}

const CheckboxUI:React.FC<CheckboxUIType> = ({disableText, value, onChange, disable, label, error}) => {

    const handleBox = (isValue) => {
        if (!disable && onChange) {
            onChange(isValue);
        }
    }

    return (
        <Body disable={disable} isError={!!error?.length} onClick={() => handleBox(!value)} >
            <input checked={value} type={"checkbox"}/>
            {label && <label>{label}</label>}
            {disableText && disable && <span className={"disable-tooltip"}>{disableText}</span>}
        </Body>
    )
};

export default CheckboxUI;