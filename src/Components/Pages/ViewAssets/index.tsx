import React, {useState} from "react";
import bg from "../../../media/worldsBG.png";
import WorldShow from "../../MAl/WorldShow";
import worldsConfig from "../../../Backend/worlds-config";
import BodyUI from "../../MAl/BodyUI";
import PanelUI from "../../MAl/PanelUI";
import {InputUI} from "../../MAl/InputUI";


const ViewAssets = (): JSX.Element => {

    const [index, setIndex] = useState(-1);

    return (
        <BodyUI>
            <img
                className={'banner'}
                src={bg}
                alt={'Banner_image'}
            />
            <PanelUI name={'Assets'}>
                <InputUI hint={'pin'} />
            </PanelUI>
        </BodyUI>
    )
}

export default ViewAssets