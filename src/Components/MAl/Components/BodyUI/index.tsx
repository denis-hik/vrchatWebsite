import React, {useCallback, useRef} from "react";
import bg from '../../../../media/worldsBG.jpeg';
import {Body} from './styled'

type BodyUIType = {
    reactBack?: React.ReactNode | JSX.Element
    backImage?: string;
    backVideo?: string;
    backVideoImage?: string;
}

const BodyUI:React.FC<BodyUIType> = ({reactBack, backImage, backVideo , backVideoImage, children, ...props}) => {

    const ref = useRef(null);

    const onLoaded = useCallback(() => {
        // @ts-ignore
        // ref.current?.style?.visibility = 'visible'
    }, []);

    const onEnded = useCallback((event) => {
        console.log(event)
        event.load();
    }, []);

    return (<Body>
        {(!backImage && !backVideo && !reactBack) && <img src={bg} className={'banner'}/>}
        {backImage && <img src={backImage} className={'banner'}/>}
        {backVideo && <video
            onLoadedMetadata={onLoaded} className={"banner"}
            onEnded={onEnded}
            id={'videoHB'}
            ref={ref}
            loop={false}
            autoPlay={true}
            muted={true}
            playsInline={true}
            poster={backVideoImage}
        >
            <source src={backVideo} type="video/mp4"/>
        </video>}
        {reactBack}
        {children}
    </Body>)
}

export default BodyUI