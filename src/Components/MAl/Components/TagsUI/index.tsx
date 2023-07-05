import {Body, Title} from "./styled";
import Button from "../ButtonUI";
import React from "react";

type TagsUItype = {
    list: string[];
    outline?: boolean;
    title?: string;
    className?: string;
}
const TagsUI:React.FC<TagsUItype> = ({list, outline,title, className}) => {

    return (
        <Body isTitle={!!title} className={className} outline={outline}>
            {title && <Title>{title}</Title>}
            {list.map((data) => (
                <Button outline={true} text={data} />
            ))}
        </Body>
    )
};

export default TagsUI;