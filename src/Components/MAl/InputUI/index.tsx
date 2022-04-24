import React from "react";
import { Body } from "./styled";

type InputUIType = {
    hint?: string
}

export const InputUI: React.FC<InputUIType> = ({hint}) => {

    return(
        <Body>
            <input
                className={'input'}
                placeholder={hint}

            />
        </Body>
    )
}