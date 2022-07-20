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

export type dataAssetType = {
    name: string,
    image: string,
    des: string,
    download: string,
    id: string | number,
}

export type dataWorldType = {
    title: string,
    image: string,
    tag: string[],
    fav: string,
}


const ViewAssets = (): JSX.Element => {

    const [index, setIndex] = useState(-1);
    const [data, setData] = useState<dataAssetType[]>([])
    const [status, setStatus] = useState("loading")

    useEffect(() => {
        getAssetsAction({
            successCallback: data1 => {
                setData(data1)
            },
            errorCallback: () => {
                setData([]);
                setStatus("error");
            },
        })
    }, [])

    return (
        <BodyUI>
            <img
                className={'banner'}
                src={bg}
                alt={'Banner_image'}
            />
            <PanelUI name={'Assets'}>
                <InputUI hint={'pin'} />
                <EmptyUI height={'20px'} />
                {data.length > 0 ? data.map((data: dataAssetType, index) => (
                    <ItemAsset tags={data[5] ? data[5] : ''} name={data[1]} image={data[3]} setIndex={() => setIndex(index)} />
                )) : <LoadingAssets status={status} />}
            </PanelUI>
            {index != -1 && <AssetShow
                onClose={() => setIndex(-1)}
                // @ts-ignore
                data={data[index]}
            />}
        </BodyUI>
    )
}

export default ViewAssets