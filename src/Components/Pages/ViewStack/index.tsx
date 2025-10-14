import React, {useState} from 'react';
import BodyUI from "../../MAl/Components/BodyUI";
import slime from "../../../media/slime.jpg"
import PanelUI from "../../MAl/Components/PanelUI";
import ButtonUI from "../../MAl/Components/ButtonUI";
import EmptyUI from "../../MAl/Components/EmptyUI";

import img from "../../../media/stackBG.png"

type ViewStackType = {};

const ViewStack: React.FC<ViewStackType> = () => {

    return (
        <BodyUI invertXBanner backImage={img}>
            <PanelUI name={"My stack VR"}>
                <ButtonUI  text={"Oculus Pro VR"} image={"https://portagame.ru///katalog/game/vr-headsets/oculus-quest-pro-256.jpg"} />
                <EmptyUI height={'10px'} />
                <ButtonUI text={"VIVE Trackers 4x"} image={"https://cdn1.ozone.ru/s3/multimedia-l/c1000/6105217617.jpg"} />
                <EmptyUI height={'10px'} />
                <ButtonUI text={"Slime vr 8x"} image={slime} />
                <EmptyUI height={'10px'} />
                <ButtonUI
                    text={"Base station v1 2x"}
                    image={"data:image/png;base64,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"}
                />
            </PanelUI>
        </BodyUI>
    );
};

export default ViewStack;