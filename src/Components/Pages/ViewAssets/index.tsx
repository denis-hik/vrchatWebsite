import React, {useEffect, useState} from "react";
import bg from "../../../media/worldsBG.png";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {InputUI} from "../../MAl/Components/InputUI";
import {ItemAsset} from "./ui/ItemAsset";
import EmptyUI from "../../MAl/Components/EmptyUI";
import {AssetShow} from "./ui/AssetShow";
import LoadingAssets from "./ui/LoadingAssets";
import {REQUEST_SERVER} from "../../../Backend/types";
import {getAssetsAction} from "./modal/getAssetsAction";
import {SliderUI} from "../../MAl/Components/SliderUI";
import {TwoCollumsUI} from "../../MAl/Components/TwoCollumsUI";
import {ListMapVerticalUI} from "../../MAl/Components/ListMapVerticalUI";

export type dataAssetType = {
    name: string,
    image: string,
    des: string,
    download: string,
    id: string | number,
}

export type dataWorldType = {
    id: string,
    title: string,
    image: string,
    tag: string[],
    fav: string,
}

type PropsI = {
    data: dataAssetType[];
    status: string;
}


const ViewAssets:React.FC<PropsI> = ({data, status}) => {

    const [index, setIndex] = useState(-1);
    const [selectValueTab, setSelectValueTab] = useState('My');

    return (
        <BodyUI
            backImage={bg}
        >
            <PanelUI name={'Assets'}>
                <TwoCollumsUI>
                    <SliderUI
                        texts={['My', "Other"]}
                        onSelect={setSelectValueTab}
                        select={selectValueTab}
                    />
                    <InputUI hint={'pin'}/>
                </TwoCollumsUI>
                <EmptyUI height={'20px'}/>
                <ListMapVerticalUI>
                    {data
                        .filter((data) => selectValueTab == "Other"
                            ? data[5].indexOf('my') == -1
                            : data[5].indexOf('my') > -1)
                        .length > 0 ? data
                        .filter((data) => selectValueTab == "Other"
                            ? data[5].indexOf('my') == -1
                            : data[5].indexOf('my') > -1)
                        .map((data: dataAssetType, index) => (
                            <ItemAsset
                                tags={data[5] ? data[5] : ''}
                                name={data[1]} image={data[3]}
                                setIndex={() => setIndex(index)}
                                key={index}
                            />
                        )) : <LoadingAssets status={status}/>}
                </ListMapVerticalUI>
            </PanelUI>
            {index != -1 && <AssetShow
                onClose={() => setIndex(-1)}
                // @ts-ignore
                data={data.filter((data) => selectValueTab == "Other"
                    ? data[5].indexOf('my') == -1
                    : data[5].indexOf('my') > -1)[index]}
            />}
        </BodyUI>
    )
}

export default ViewAssets