import React from "react";
import { Body } from "./styled";

type InputUIType = {
    hint?: string
    onChange?: (e) => void
    error?: string;
    className?: string;
}

export const InputUI: React.FC<InputUIType> = ({hint,onChange, className, error}) => {

    return(
        <Body error={error} className={className}>
            <input
                className={'input'}
                placeholder={hint}
                onChange={onChange}
            />
            {error && <span className={"error"}>{error}</span>}
        </Body>
    )
}