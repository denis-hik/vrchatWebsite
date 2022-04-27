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

    const getVideo = () => {
        setError('')
        // var headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        // myHeaders.append("Cookie", "__ddg1_=kdfAhpYEUWO8TSQRpDVt");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            mode: 'no-cors' as RequestMode,
        } as RequestInit;
        if (url.length > 3) {
            if (url.includes('http')) {
                fetch("https://maadhav-ytdl.herokuapp.com/video_info.php?url=" + url, requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        setResult(result)
                    })
                    .catch(error => {
                        setError(error.toString())
                        console.log('error', error);
                    });
            } else {
                setError('Invalid url')
            }

        } else {
            setError('Insert url')
        }

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