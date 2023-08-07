import TextUI from "../../../../MAl/Components/TextUI";
import ImageUI from "../../../../MAl/Components/ImageUI";
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {Body, BodyImage} from "../../../../MAl/WorldShow/styled";
import React, {createRef, useRef, useState} from "react";
import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import EmptyUI from "../../../../MAl/Components/EmptyUI";
import {dataAssetType} from "../../../../../Backend/types";
import GridUI from "../../../../MAl/Components/GridUI";

type AssetShowType = {
    data: dataAssetType;
    onClose: () => void;
}

export const AssetShow: React.FC<AssetShowType> = ({data, onClose}) => {

    const [animClose, setAnimClose] = useState(false);
    const [imgShow, setImgShow] = useState<string | boolean>(false);

    const handleClose = () => {
        setAnimClose(true);
        setTimeout(() => onClose(), 1000);
    }

    return (<>
        <Body isCloseAnim={animClose}>
            <div className={'close'} onClick={handleClose}/>
            <TextUI  text={data.name}/>
            <ImageUI src={data.image}/>
            <SmallTextUI text={data.des} color={'grey'} />
            {/*<TagsUI list={data.ex.split(',')}/>*/}
            <EmptyUI height={'20px'} />
            <ButtonUI bottom={true} text={'Download'} onClick={() => window.open(data.download)}/>
            <GridUI>
                {!!data?.images?.map ? data?.images?.map((data, index) => (
                    <ImageUI onClick={() => setImgShow(data)}  key={index} src={data}/>
                )) : null}
            </GridUI>

        </Body>
            {imgShow && typeof imgShow === "string" && <BodyImage >
                <img src={imgShow} />
                <div className={'close'} onClick={() => setImgShow(false)}/>
            </BodyImage>}
    </>

    )
}