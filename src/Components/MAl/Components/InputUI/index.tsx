import React, {useState} from "react";
import { Body } from "./styled";

type InputUIType = {
    hint?: string
    onChange?: (e) => void
    error?: string;
    className?: string;
    disable?: boolean;
}

export const InputUI: React.FC<InputUIType> = ({hint,onChange, className, error, disable}) => {

    const [value, setValue] = useState("");

    const handleChange = (value) => {
        if (!disable) {
            setValue(value);
            if (onChange) {
                onChange(value)
            }
        }
    }

    return(
        <Body disable={disable} error={error} className={className}>
            <input
                value={value}
                className={'input'}
                placeholder={hint}
                onChange={(e) => handleChange(e.target.value)}
            />
            {error && <span className={"error"}>{error}</span>}
        </Body>
    )
}