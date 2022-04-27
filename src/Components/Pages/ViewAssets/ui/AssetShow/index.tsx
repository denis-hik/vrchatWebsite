import TextUI from "../../../../MAl/Components/TextUI";
import ImageUI from "../../../../MAl/Components/ImageUI";
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {Body} from "../../../../MAl/WorldShow/styled";
import {dataAssetType} from "../../index";
import React from "react";
import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import EmptyUI from "../../../../MAl/Components/EmptyUI";

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
            <ButtonUI bottom={true} text={'Download'} onClick={() => window.open(data[4])}/>
            {/*<GridUI>*/}
            {/*    {data.gallery?.map((data) => (*/}
            {/*        <ImageUI src={data}/>*/}
            {/*    ))}*/}
            {/*</GridUI>*/}

        </Body>
    )
}