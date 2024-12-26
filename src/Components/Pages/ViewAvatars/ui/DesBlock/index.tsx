import React from "react";
import {dataAvatarType} from "../../../../../Backend/types";
import TextUI from "../../../../MAl/Components/TextUI";
import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import {ActionsBlock, TagsBlock} from "../AvatarShow/styled";
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {RootState} from "../../../../../context/store";
import {useSelector} from "react-redux";
import {deepEqual} from "../../../../../context/supply";

type DesBlockType = {
    data: dataAvatarType;
    onShowForm: () => void;
}

const costSelector = (root:RootState) => root.avatars.cost
const DesBlock: React.FC<DesBlockType> = ({data, onShowForm}) => {
    const cost = useSelector(costSelector,deepEqual)

    return (
        <>
            <SmallTextUI text={data.des} color={'grey'} />
            {typeof data.need === "object" && <TagsBlock right={"5px"} left={"5px"} title={"Нужно"} outline={true} list={data.need}/>}
            <ActionsBlock>
                {cost.data?.currency !== undefined && <ButtonUI outline={true} className={"button-action-0"}
                           text={`~${cost.data?.[data.id]}${cost.data?.currency}`}/>}
                <ButtonUI
                    disable={["idle", "pending", "failed"].includes(cost.state)}
                    className={"button-action-1"}
                    text={"Оставить заявку"}
                    onClick={onShowForm}
                />
            </ActionsBlock>
        </>

    )
}

export default DesBlock;