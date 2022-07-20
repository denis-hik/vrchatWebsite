import React from "react";
import {CardLoading} from "./styled";
import lottieJson from "../../../../../media/loading.json";
import {Player} from "@lottiefiles/react-lottie-player";

type LoadingAssetsType = {
    status: string;
}

const LoadingAssets: React.FC<LoadingAssetsType> = (
    {
        status,
    }
) => {

    return (
        <>
            {status === "loading"
                ? <Player
                    autoplay
                    loop
                    controls={false}
                    src={lottieJson}
                    style={{height: '300px', width: '300px'}}
                />
                : <Player
                    autoplay
                    loop
                    controls={false}
                    src={"https://assets9.lottiefiles.com/packages/lf20_ne7zlgjw.json"}
                    style={{ height: '300px', width: '300px' }}
                />
            }
        </>
    )
};

export default LoadingAssets