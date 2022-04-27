import {Body} from "./styled";
import TextUI from "../Components/TextUI";
import ImageUI from "../Components/ImageUI";
import {worldsTypes} from "../../../Backend/types";
import ButtonUI from "../Components/ButtonUI";
import TagsUI from "../Components/TagsUI";
import GridUI from "../Components/GridUI";
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
            <ButtonUI bottom={!data.gallery} text={'Join'} onClick={() => window.open(data.url)} />
            {data.gallery && <GridUI>
                {data.gallery?.map((data) => (
                    <ImageUI src={data}/>
                ))}
            </GridUI>}

        </Body>
    )
}

export default  WorldShow;