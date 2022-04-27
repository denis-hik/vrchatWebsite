import React, {useEffect, useState} from "react";
import bg from "../../../media/worldsBG.png";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {InputUI} from "../../MAl/Components/InputUI";
import {ItemAsset} from "./ui/ItemAsset";
import EmptyUI from "../../MAl/Components/EmptyUI";
import {AssetShow} from "./ui/AssetShow";
import LoadingAssets from "./ui/LoadingAssets";

export type dataAssetType = {
    name: string,
    image: string,
    des: string,
    download: string,
    id: string | number,
}


const ViewAssets = (): JSX.Element => {

    const [index, setIndex] = useState(-1);
    const [data, setData] = useState<dataAssetType[]>([])

    useEffect(() => {
        fetch('https://request.denishik.ru/vrchat/assets', {mode: "cors", headers: {"Access-Control-Allow-Origin": "*"}})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setData(data.result)
                console.log(data.result)
            })
            .catch(function (error) {
                alert('err')
                setData([])
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
                    <ItemAsset tags={data[5]} name={data[1]} image={data[3]} setIndex={() => setIndex(index)} />
                )) : <LoadingAssets />}
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