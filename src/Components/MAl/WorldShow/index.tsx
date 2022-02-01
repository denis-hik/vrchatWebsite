import {Body} from "./styled";
import TextUI from "../TextUI";
import ImageUI from "../ImageUI";
import {worldsTypes} from "../../../Backend/types";
import ButtonUI from "../ButtonUI";
import TagsUI from "../TagsUI";
import GridUI from "../GridUI";
import {closeIcon} from "../../../media/icons";

type propsType = {
    data: worldsTypes ;
    onClose: () => void;
}

const WorldShow = ({data, onClose}:propsType) => {

    return (
        <Body>
            <div className={'close'} onClick={onClose} />
            <TextUI text={data.name} />
            <ImageUI src={data.image} />
            <TagsUI list={data.ex.split(',')} />
            <ButtonUI text={'Join'} onClick={() => window.open(data.url)} />
            <GridUI>
                {data.gallery?.map((data) => (
                    <ImageUI src={data} />
                ))}
            </GridUI>

        </Body>
    )
}

export default  WorldShow;