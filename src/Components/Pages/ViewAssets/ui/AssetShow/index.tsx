import TextUI from "../../../../MAl/Components/TextUI";
import ImageUI from "../../../../MAl/Components/ImageUI";
import ButtonUI from "../../../../MAl/Components/ButtonUI";
import {Body} from "../../../../MAl/WorldShow/styled";
import React from "react";
import SmallTextUI from "../../../../MAl/Components/SmallTextUI";
import EmptyUI from "../../../../MAl/Components/EmptyUI";
import {dataAssetType} from "../../../../../Backend/types";
import GridUI from "../../../../MAl/Components/GridUI";

type AssetShowType = {
    data: dataAssetType;
    onClose: () => void;
}

export const AssetShow: React.FC<AssetShowType> = ({data, onClose}) => {

    return (
        <Body>
            <div className={'close'} onClick={onClose}/>
            <TextUI  text={data.name}/>
            <ImageUI src={data.image}/>
            <SmallTextUI text={data.des} color={'grey'} />
            {/*<TagsUI list={data.ex.split(',')}/>*/}
            <EmptyUI height={'20px'} />
            <ButtonUI bottom={true} text={'Download'} onClick={() => window.open(data.download)}/>
            <GridUI>
                {!!data?.images?.map ? data?.images?.map((data, index) => (
                    <ImageUI key={index} src={data}/>
                )) : null}
            </GridUI>

        </Body>
    )
}