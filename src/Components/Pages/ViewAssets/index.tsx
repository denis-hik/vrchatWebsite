import React, {useEffect, useState} from "react";
import bg from "../../../media/worldsBG.jpeg";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {InputUI} from "../../MAl/Components/InputUI";
import {ItemAsset} from "./ui/ItemAsset";
import EmptyUI from "../../MAl/Components/EmptyUI";
import {AssetShow} from "./ui/AssetShow";
import LoadingAssets from "./ui/LoadingAssets";
import {SliderUI} from "../../MAl/Components/SliderUI";
import {TwoCollumsUI} from "../../MAl/Components/TwoCollumsUI";
import {ListMapVerticalUI} from "../../MAl/Components/ListMapVerticalUI";
import {dataAssetType} from "../../../Backend/types";

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

    useEffect(() => {
        setIndex(-1);
    }, [selectValueTab])

    return (
        <BodyUI
            backImage={bg}
        >
            <PanelUI name={'Assets'}>
                <TwoCollumsUI gap={"10px"} justifyContent={"space-between"} >
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
                            ? data.tags?.indexOf('My') == -1
                            // @ts-ignore
                            : data?.tags?.indexOf('My') > -1)
                        .length > 0 ? data
                        .filter((data) => selectValueTab == "Other"
                            ? data.tags?.indexOf('My') == -1
                            // @ts-ignore
                            : data?.tags?.indexOf('My') > -1)
                        .map((data: dataAssetType, index) => (
                            <ItemAsset
                                tags={!!data?.tags?.length ? data?.tags : []}
                                name={data.name} image={data.image}
                                setIndex={() => setIndex(index)}
                                key={index}
                            />
                        )) : <LoadingAssets status={status}/>}
                </ListMapVerticalUI>
            </PanelUI>
            {index != -1 && data.filter((data) => selectValueTab == "Other"
                ? data?.tags?.indexOf('My') == -1
                // @ts-ignore
                : data?.tags?.indexOf('My') > -1)[index] && <AssetShow
                onClose={() => setIndex(-1)}
                // @ts-ignore
                data={data.filter((data) => selectValueTab == "Other"
                    ? data?.tags?.indexOf('My') == -1
                    // @ts-ignore
                    : data?.tags?.indexOf('My') > -1)[index]}
            />}
        </BodyUI>
    )
}

export default ViewAssets