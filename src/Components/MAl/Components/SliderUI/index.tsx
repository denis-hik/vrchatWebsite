import React, {useCallback, useEffect, useState} from 'react';
import {Body} from "./styled";
import ButtonUI from "../ButtonUI";

type Types = {
    texts: string[];
    onSelect?: (text: string) => void;
    select?: string;
}

export const SliderUI: React.FC<Types> = (
    {
        texts,
        onSelect,
        select,
    }
) => {

    const [selectValue, setSelectValue] = useState('');

    useEffect(() => {
        select && setSelectValue(select)
    }, [select])

    const onClick = useCallback((id) => {
        onSelect && onSelect(texts[id])
    }, [])

    return (
        <Body>
            {texts.map((text, id) => (
                <ButtonUI height={50} onClick={() => onClick(id)} key={id} outline={selectValue != text} text={text}/>
            ))}
        </Body>
    )
}