import React from "react";
import {Body} from './styled'

type BodyUIType = {
    backImage?: string;
}

const BodyUI:React.FC<BodyUIType> = ({backImage, children, ...props}) => {

    return (<Body>
        {backImage && <img src={backImage} className={'banner'}/>}
        {children}
    </Body>)
}

export default BodyUI