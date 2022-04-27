import React from "react";
import {Body} from './styled'

type BodyUIType = {

}

const BodyCenterUI:React.FC = ({children, ...props}) => {

    return (<Body>{children}</Body>)
}

export default BodyCenterUI;