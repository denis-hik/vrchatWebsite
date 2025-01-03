import React, {useCallback} from "react";
import {Body} from "./styled";
import TextUI from "../Components/TextUI";
import ImageUI from "../Components/ImageUI";
import ButtonUI from "../Components/ButtonUI";
import {dataWorldType} from "../../Pages/ViewAssets";
import EmptyUI from "../Components/EmptyUI";
import {Tags} from "../Components/ButtonUI/styled";
import {TagsBlock} from "../../Pages/ViewAvatars/ui/AvatarShow/styled";

type propsType = {
    data: dataWorldType ;
    onClose: () => void;
}

const WorldShow = ({data, onClose}:propsType) => {


    const VRChatOpen = useCallback(() => {
        window.open(`https://vrchat.com/home/world/${data.id}`, '_blank')
    }, [data.id])

    return (
        <Body isCloseAnim={false}>
            <div className={'close'} onClick={onClose} />
            <TextUI text={data.title} />
            <div className={'imageBlock'}>
                <ImageUI src={data.image} />
                <ButtonUI
                    className={'favBlock'}
                    text={data.fav}
                    icon={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png'}
                />
            </div>
            <ButtonUI
                onClick={VRChatOpen}
                text={'Open VRChat'}
            />
            <TagsBlock title={"Теги"}  outline={true} left={"45px"} right={"10px"} list={data.tag}/>
            {/*<TagsUI list={data.tag} />*/}
            {/*<ButtonUI bottom={!data.gallery} text={'Join'} onClick={() => window.open(data.url)} />*/}
            {/*{data.gallery && <GridUI>*/}
            {/*    {data.gallery?.map((data) => (*/}
            {/*        <ImageUI src={data}/>*/}
            {/*    ))}*/}
            {/*</GridUI>}*/}

        </Body>
    )
}

export default  WorldShow;