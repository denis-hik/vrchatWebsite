import React from 'react';
import BodyUI from "../../MAl/Components/BodyUI";
import img from "../../../media/stackBG.png"
import slime from "../../../media/slime.jpg"
import PanelUI from "../../MAl/Components/PanelUI";
import ButtonUI from "../../MAl/Components/ButtonUI";
import EmptyUI from "../../MAl/Components/EmptyUI";

type ViewStackType = {};

const ViewStack: React.FC<ViewStackType> = () => {

    return (
        <BodyUI backImage={img}>
            <PanelUI name={"My stack VR"}>
                <ButtonUI  text={"Oculus VR"} image={"https://igroray.ru/upload/iblock/279/615YaAiA_ML._SL1500_.jpg"} />
                <EmptyUI height={'10px'} />
                <ButtonUI text={"VIVE Trackers 3x"} image={"https://cdn1.ozone.ru/s3/multimedia-l/c1000/6105217617.jpg"} />
                <EmptyUI height={'10px'} />
                <ButtonUI text={"Slime vr 8x"} image={slime} />
            </PanelUI>
        </BodyUI>
    );
};

export default ViewStack;