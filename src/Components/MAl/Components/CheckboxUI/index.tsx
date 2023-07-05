import React from "react";
import {Body} from "./styled";

type CheckboxUIType = {
    value?: boolean,
    onChange?: (isResult: boolean) => void;
    disable?: boolean;
    label?: string | React.ReactNode;
    error?: string;
}

const CheckboxUI:React.FC<CheckboxUIType> = ({value, onChange, disable, label, error}) => {

    const handleBox = (isValue) => {
        if (!disable && onChange) {
            onChange(isValue);
        }
    }

    return (
        <Body isError={!!error?.length} onClick={() => handleBox(!value)} >
            <input checked={value} type={"checkbox"}/>
            {label && <label>{label}</label>}
        </Body>
    )
};

export default CheckboxUI;