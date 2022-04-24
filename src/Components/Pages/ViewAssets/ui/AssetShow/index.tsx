import TextUI from "../../../../MAl/TextUI";
import ImageUI from "../../../../MAl/ImageUI";
import TagsUI from "../../../../MAl/TagsUI";
import ButtonUI from "../../../../MAl/ButtonUI";
import GridUI from "../../../../MAl/GridUI";
import {Body} from "../../../../MAl/WorldShow/styled";
import {dataAssetType} from "../../index";
import React from "react";
import SmallTextUI from "../../../../MAl/SmallTextUI";
import EmptyUI from "../../../../MAl/EmptyUI";

type AssetShowType = {
    data: dataAssetType;
    onClose: () => void;
}

export const AssetShow: React.FC<AssetShowType> = ({data, onClose}) => {

    return (
        <Body>
            <div className={'close'} onClick={onClose}/>
            <TextUI  text={data[1]}/>
            <ImageUI src={data[3]}/>
            <SmallTextUI text={data[2]} color={'grey'} />
            {/*<TagsUI list={data.ex.split(',')}/>*/}
            <EmptyUI height={'20px'} />
            <ButtonUI text={'Download'} onClick={() => window.open(data[4])}/>
            {/*<GridUI>*/}
            {/*    {data.gallery?.map((data) => (*/}
            {/*        <ImageUI src={data}/>*/}
            {/*    ))}*/}
            {/*</GridUI>*/}

        </Body>
    )
}