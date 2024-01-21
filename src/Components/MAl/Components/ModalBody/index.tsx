import { Body } from "./styled"
import TextUI from "../TextUI";
import React from "react";

type ModalBodyType = {
    show: boolean;
    label?: string;
    onClose?: () => void
}
const ModalBodyUI:React.FC<ModalBodyType> = ({show, label, onClose,children }) => {

    if (!show) {
        return (<></>)
    }

    return (
        <Body>
            <div style={{height: "inherit",overflow: "hidden", position: "relative"}}>
                {onClose && <div className={'close'} onClick={onClose}/>}
                {label && <TextUI text={label}/>}
                {children}
            </div>
        </Body>
    )
}

export default ModalBodyUI