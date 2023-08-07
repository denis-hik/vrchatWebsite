import TextUI from "../../../../MAl/Components/TextUI";
import {Body} from "../../../../MAl/WorldShow/styled";
import React, {useEffect, useState} from "react";
import {dataAssetType, dataAvatarType} from "../../../../../Backend/types";
import DesBlock from "../DesBlock";
import FormBlock from "../FormBlock";

type AssetShowType = {
    data: dataAvatarType;
    onClose: () => void;
    assets?: dataAssetType[];
}

export const AssetShow: React.FC<AssetShowType> = ({data, onClose, assets}) => {
    const [isShowForm, setIsShowForm] = useState(false);

    useEffect(() => {
        setIsShowForm(false);
    }, [data]);

    return (
        <Body isCloseAnim={false}>
            <div style={{height: "inherit",overflow: "hidden", position: "relative"}}>
                <div className={'close'} onClick={onClose}/>
                <TextUI  text={data.name}/>
                {!isShowForm
                    ? <DesBlock data={data} onShowForm={() => setIsShowForm(true)} />
                    : <FormBlock assets={assets} onClose={() => setIsShowForm(false)} data={data} />}
            </div>

            {/*<ButtonUI bottom={true} text={'Download'} onClick={() => window.open(data)}/>*/}

        </Body>
    )
}