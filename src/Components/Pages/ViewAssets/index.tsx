import React, {useEffect, useState} from "react";
import bg from "../../../media/worldsBG.png";
import BodyUI from "../../MAl/BodyUI";
import PanelUI from "../../MAl/PanelUI";
import {InputUI} from "../../MAl/InputUI";
import {ItemAsset} from "./ui/ItemAsset";
import EmptyUI from "../../MAl/EmptyUI";
import {AssetShow} from "./ui/AssetShow";

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
                {data.map((data: dataAssetType, index) => (
                    <ItemAsset tags={data[5]} name={data[1]} image={data[3]} setIndex={() => setIndex(index)} />
                ))}
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