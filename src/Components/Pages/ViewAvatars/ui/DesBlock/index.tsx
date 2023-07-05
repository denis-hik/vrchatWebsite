import React from "react";
import {dataAvatarType} from "../../../../../Backend/types";
import TextUI from "../../../../MAl/Components/TextUI";
import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import {ActionsBlock, TagsBlock} from "../AvatarShow/styled";
import ButtonUI from "../../../../MAl/Components/ButtonUI";

type DesBlockType = {
    data: dataAvatarType;
    onShowForm: () => void;
}
const DesBlock: React.FC<DesBlockType> = ({data, onShowForm}) => {

    return (
        <>
            <SmallTextUI text={data.des} color={'grey'} />
            {typeof data.need === "object" && <TagsBlock title={"Нужно"} outline={true} list={data.need}/>}
            <ActionsBlock>
                <ButtonUI outline={true} className={"button-action-0"} text={`~${data.cost} RUB`} />
                <ButtonUI className={"button-action-1"} text={"Оставить заявку"} onClick={onShowForm} />
            </ActionsBlock>
        </>

    )
}

export default DesBlock;