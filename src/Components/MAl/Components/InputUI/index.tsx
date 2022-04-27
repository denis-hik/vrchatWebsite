import React from "react";
import { Body } from "./styled";

type InputUIType = {
    hint?: string
    onChange?: (e) => void
}

export const InputUI: React.FC<InputUIType> = ({hint,onChange}) => {

    return(
        <Body>
            <input
                className={'input'}
                placeholder={hint}
                onChange={onChange}
            />
        </Body>
    )
}