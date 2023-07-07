import React, {createRef, InputHTMLAttributes, useEffect, useRef, useState} from "react";
import { Body } from "./styled";

type InputUIType = {
    hint?: string
    onChange?: (e) => void
    error?: string;
    className?: string;
    disable?: boolean;
    defaultValue?: string;
    value?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}

export const InputUI: React.FC<InputUIType> = (
    {
        hint,
        onChange,
        value: valueB,
        className,
        error,
        disable,
        defaultValue,
        onFocus = () => {},
        onBlur = () => {},
    }
) => {

    const [value, setValue] = useState("");
    const ref = useRef<any>();

    const handleChange = (value) => {
        if (!disable) {
            valueB === undefined && setValue(value);
            if (onChange) {
                onChange(value)
            }
        }
    }

    useEffect(() => {
        defaultValue && setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (disable) {
            ref.current?.blur();
        }
    }, [disable]);

    return(
        <Body disable={disable} error={error} className={className}>
            <input
                onFocus={onFocus}
                onBlur={onBlur}
                ref={ref}
                value={valueB === undefined ? value : valueB}
                className={'input'}
                placeholder={hint}
                onChange={(e) => handleChange(e.target.value)}
            />
            {error && <span className={"error"}>{error}</span>}
        </Body>
    )
}