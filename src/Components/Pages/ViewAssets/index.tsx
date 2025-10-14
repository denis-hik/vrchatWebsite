import React, {useCallback, useEffect, useState} from "react";
import bg from "../../../media/worldsBG.jpeg";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {InputUI} from "../../MAl/Components/InputUI";
import {ItemAsset} from "./ui/ItemAsset";
import EmptyUI from "../../MAl/Components/EmptyUI";
import {AssetShow} from "./ui/AssetShow";
import EmptyAssets from "./ui/LoadingAssets";
import {SliderUI} from "../../MAl/Components/SliderUI";
import {TwoCollumsUI} from "../../MAl/Components/TwoCollumsUI";
import {ListMapVerticalUI} from "../../MAl/Components/ListMapVerticalUI";
import {dataAssetType} from "../../../Backend/types";
import {AssetsPageContextProvider} from "./modal/context";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../../context/store";
import { setAssetCurrent } from "./modal/reducer/assetsSlice";

export type dataWorldType = {
    id: string,
    title: string,
    image: string,
    tag: string[],
    fav: string,
}

type PropsI = {}

const assetsSelector = (root: RootState) => root.assets.data
const loadSelector = (root: RootState) => ["idle", "pending"].includes(root.assets.state)
const currentSelector = (root: RootState) => root.assets.current

const bgImages = [bg, "https://vrchat.denishik.ru/static/media/erpCard.png", "https://public-files.gumroad.com/z22suczpdrwuvm1dk9se5zm3o5dl"]

const ViewAssets: React.FC<PropsI> = ({}) => {
    const dispatch = useAppDispatch()

    const [selectValueTab, setSelectValueTab] = useState('My');

    const dataSelector = useCallback((root: RootState): dataAssetType[] => {
        const assets = assetsSelector(root)
        if (!assets)
            return []

        return Object.values(assets).filter((item: dataAssetType) => item.tags.includes(selectValueTab))
    }, [selectValueTab])

    const data = useSelector(dataSelector)
    const loading = useSelector(loadSelector)
    const current = useSelector(currentSelector)

    const onSelect = (data: dataAssetType) => {
        dispatch(setAssetCurrent(data))
    }

    const closeSelect = () => {
        dispatch(setAssetCurrent())
    }

    return (
        <AssetsPageContextProvider>
            <BodyUI backImage={bgImages}>
                <PanelUI name={'Assets'}>
                    <TwoCollumsUI gap={"10px"} justifyContent={"space-between"}>
                        <SliderUI
                            texts={['My', "Other"]}
                            onSelect={setSelectValueTab}
                            select={selectValueTab}
                        />
                        <InputUI hint={'pin'}/>
                    </TwoCollumsUI>
                    <EmptyUI height={'20px'}/>
                    <ListMapVerticalUI>
                        {!!data.length ? data.map((data: dataAssetType, index) => (
                            <ItemAsset
                                tags={!!data?.tags?.length ? data?.tags : []}
                                name={data.name} image={data.image}
                                setIndex={() => onSelect(data)}
                                key={index}
                            />
                        )) : <EmptyAssets isLoading={loading} />}
                    </ListMapVerticalUI>
                </PanelUI>
                {!!current && <AssetShow
                    onClose={closeSelect}
                    data={current}
                />}
            </BodyUI>
        </AssetsPageContextProvider>
    )
}

export default ViewAssets