import React, {useState} from "react";
import bg from "../../../media/worldsBG.png";
import WorldShow from "../../MAl/WorldShow";
import worldsConfig from "../../../Backend/worlds-config";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import AdapterWorlds from "./AdapterWorlds/AdapterWorlds";
import worldsData from '../../../Backend/worlds-config'


const ViewWord = ():JSX.Element => {

    const [index, setIndex] = useState(-1);

    return (
        <BodyUI>
            <img
                className={'banner'}
                src={bg}
                alt={'Banner_image'}
            />
            <PanelUI name={'worlds'}>
                {/*@ts-ignore*/}
                <AdapterWorlds data={worldsData}  setIndex={setIndex}/>
            </PanelUI>
            {index != -1 && <WorldShow
                onClose={() => setIndex(-1)}
                // @ts-ignore
                data={worldsConfig[index || 0]}
            />}

        </BodyUI>
    )
}

export default ViewWord