import React, {createRef, useEffect, useRef, useState} from "react";
import bg from "../../../media/worldsBG.jpeg";
import WorldShow from "../../MAl/WorldShow";
import BodyUI from "../../MAl/Components/BodyUI";
import PanelUI from "../../MAl/Components/PanelUI";
import AdapterWorlds from "./ui/AdapterWorlds/AdapterWorlds";
import {getWorldsAction} from "./model/getWorldsAction";
import {dataWorldType} from "../ViewAssets";
import TextUI from "../../MAl/Components/TextUI";
import {Player} from "@lottiefiles/react-lottie-player";
import lottieJson from "../../../media/loading.json"
import {offlineWorlds} from "./model/offlineWorlds";

const ViewWord = ():JSX.Element => {

    const [index, setIndex] = useState(-1);
    const [worlds, setWorlds] = useState<dataWorldType[]>([]);
    const [text, setText] = useState("Ожидайте...");

    const ref = useRef();

    useEffect(() => {
        // getWorldsAction({
        //     successCallback: (data) => {
        //         setWorlds(data);
        //     },
        //     errorCallback: () => {
        //         setText("Ничего не обнаруженно")
        //         setWorlds([]);
        //     }
        // })
        setWorlds(offlineWorlds);
    }, []);

    return (
        <BodyUI>
            <img
                className={'banner'}
                src={bg}
                alt={'Banner_image'}
            />
            <PanelUI name={'worlds'}>
                {/*@ts-ignore*/}
                {worlds.length > 0
                    ? <AdapterWorlds data={worlds} setIndex={setIndex}/>
                    : text == "Ожидайте..."
                        ? <Player
                            autoplay
                            loop
                            controls={false}
                            src={lottieJson}
                            style={{ height: '300px', width: '300px' }}
                        />
                        : <TextUI text={text} />
                }
            </PanelUI>
            {index != -1 && <WorldShow
                onClose={() => setIndex(-1)}
                data={worlds[index || 0]}
            />}

        </BodyUI>
    )
}

export default ViewWord