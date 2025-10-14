import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import bg from '../../../../media/worldsBG.jpeg';
import {Body} from './styled'

type BodyUIType = {
    reactBack?: React.ReactNode | JSX.Element
    backImage?: string | string[];
    backVideo?: string;
    backVideoImage?: string;
    invertXBanner?: boolean;
    interval?: number;
}

const BodyUI:React.FC<BodyUIType> = ({
     reactBack,
     backImage,
     backVideo ,
     backVideoImage,
     children,
     invertXBanner,
     interval = 5000,
     ...props
}) => {

    const ref = useRef<HTMLVideoElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const currentImage = useMemo(() => Array.isArray(backImage) ? backImage[currentIndex] : backImage, [currentIndex]);

    const onLoaded = () => {
        // @ts-ignore
        // ref.current?.style?.visibility = 'visible'
    }

    const onEnded = useCallback((event) => {
        console.log(event)
        event.load();
    }, []);

    useEffect(() => {
        if (backImage && Array.isArray(backImage) && backImage.length > 1) {
            const timer = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % backImage.length);
                    setFade(true);
                }, 500);
            }, interval);
            return () => {
                clearInterval(timer)
                setCurrentIndex(0)
            };
        }
    }, [backImage, interval]);

    return (<Body invertXBanner={invertXBanner}>
        {(!backImage && !backVideo && !reactBack) && <img src={bg} className={'banner'}/>}
        {backImage && currentImage && <img
            src={currentImage}
            className={`banner ${fade ? 'fade-in' : 'fade-out'}`}
        />}
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