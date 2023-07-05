import React from "react";
import {Body} from "../../../../MAl/WorldShow/styled";

type StatusShowType = {
    data: {id: string, discord: string, status: string}
    onClose: () => void;
}

export const StatusShow: React.FC<StatusShowType> = ({data, onClose}) => {

    return (<Body>
        <div style={{height: "inherit",overflow: "hidden", position: "relative"}}>
            <div className={'close'} onClick={onClose}/>

        </div>
    </Body>)
}