import React from "react";
import {Body} from './styled'

type BodyUIType = {

}

const BodyUI:React.FC = ({children, ...props}) => {

    return (<Body>{children}</Body>)
}

export default BodyUI