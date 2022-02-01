import {Body} from "./styled";
import Button from "../ButtonUI";

const TagsUI = ({list}) => {

    return (
        <Body>
            {list.map((data) => (
                <Button outline={true} text={data} />
            ))}
        </Body>
    )
};

export default TagsUI;