import TextUI from "../../../../MAl/Components/TextUI";
import {Body} from "../../../../MAl/WorldShow/styled";
import React, {useEffect, useState} from "react";
import {dataAvatarType} from "../../../../../Backend/types";
import DesBlock from "../DesBlock";
import FormBlock from "../FormBlock";

type AssetShowType = {
    data: dataAvatarType;
    onClose: () => void;
}

export const AssetShow: React.FC<AssetShowType> = ({data, onClose}) => {
    const [isShowForm, setIsShowForm] = useState(false);

    useEffect(() => {
        setIsShowForm(false);
    }, [data]);

    return (
        <Body>
            <div style={{height: "inherit",overflow: "hidden", position: "relative"}}>
                <div className={'close'} onClick={onClose}/>
                <TextUI  text={data.name}/>
                {!isShowForm
                    ? <DesBlock data={data} onShowForm={() => setIsShowForm(true)} />
                    : <FormBlock onClose={() => setIsShowForm(false)} data={data} />}
            </div>

            {/*<ButtonUI bottom={true} text={'Download'} onClick={() => window.open(data)}/>*/}

        </Body>
    )
}