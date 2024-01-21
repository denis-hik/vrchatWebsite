import React, {useMemo, useState} from "react";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import {BackImage} from "./styled";
import ButtonUI from "../../MAl/Components/ButtonUI";
import img from "../../../media/furCity.png"
import {ModalContact} from "./ui/ModalContact";
import {BuyModal} from "./ui/BuyModal";

const ViewFurCity: React.FC = () => {

    const [showContactModal, setShowContactModal] = useState(false);
    const [showBuyModal, setBuyModal] = useState(false);

    const back = useMemo(() => (
        <BackImage>
            <div className={"block"}>
                <img src={img}/>
            </div>
        </BackImage>
    ), [])

    return (
        <>
            <BodyUI reactBack={back}>
                <PanelUI hideButtonBack name={"FurCity"}>
                    <ButtonUI text={"Buy apartment"} onClick={() => setBuyModal(true)}/>
                    <ButtonUI onClick={() => setShowContactModal(true)} outline bottom text={"Contact"} />
                </PanelUI>
            </BodyUI>
            <ModalContact show={showContactModal} onClose={() => setShowContactModal(false)} />
            <BuyModal show={showBuyModal} onClose={() => setBuyModal(false)} />
        </>
    )
}

export default ViewFurCity