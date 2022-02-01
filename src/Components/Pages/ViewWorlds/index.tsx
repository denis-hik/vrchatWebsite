import React, {useState} from "react";
import {Body} from "./styled";
import bg from "../../../media/worldsBG.png";
import Panel from "./ui/Panel";
import WorldShow from "../../MAl/WorldShow";
import worldsConfig from "../../../Backend/worlds-config";


const ViewWord = ():JSX.Element => {

    const [index, setIndex] = useState(-1);

    return (
        <Body>
            <img
                className={'banner'}
                src={bg}
                alt={'Banner_image'}
            />
            <Panel setIndex={setIndex} />
            {index != -1 && <WorldShow
                onClose={() => setIndex(-1)}
                // @ts-ignore
                data={worldsConfig[index || 0]}
            />}

        </Body>
    )
}

export default ViewWord