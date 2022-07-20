import style from "../../ViewStart/Convas/Convas.module.css";
import SmallTextUI from "../../../MAl/Components/SmallTextUI";
import React, {useState} from "react";
import {InputUI} from "../../../MAl/Components/InputUI";
import ButtonUI from "../../../MAl/Components/ButtonUI";
import EmptyUI from "../../../MAl/Components/EmptyUI";
import TextUI from "../../../MAl/Components/TextUI";
import BodyCenterUI from "../../../MAl/Components/BodyCenterUI";

export const Convas = (): JSX.Element => {

    const [url, setUrl] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');



    const getVideo = async () => {
        
    }


    return (
        <BodyCenterUI>
            <div className={'panel'}>
                <EmptyUI height={'20px'} />
                {!(result.length > 3) ? <InputUI
                    onChange={(e) => setUrl(e.target.value)}
                    hint={'youtube url'}
                /> :
                    <TextUI text={result} />}
                {error && <SmallTextUI text={error} color={'red'} />}
                <EmptyUI height={'20px'} />
                <ButtonUI bottom={true} text={'get'} onClick={() => getVideo()} />
            </div>

        </BodyCenterUI>
    )
};