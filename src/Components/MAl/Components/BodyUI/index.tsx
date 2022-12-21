import React, {useCallback, useRef} from "react";
import {Body} from './styled'

type BodyUIType = {
    backImage?: string;
    backVideo?: string;
    backVideoImage?: string;
}

const BodyUI:React.FC<BodyUIType> = ({backImage, backVideo , backVideoImage, children, ...props}) => {

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
        {children}
    </Body>)
}

export default BodyUI