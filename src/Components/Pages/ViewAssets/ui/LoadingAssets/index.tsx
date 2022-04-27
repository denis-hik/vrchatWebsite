import React from "react";
import {CardLoading} from "./styled";

const hiden = ['', '']

type LoadingAssetsType = {

}

const LoadingAssets: React.FC<LoadingAssetsType> = () => {

    return (
        <>
            {hiden.map((text, index) => (
                <CardLoading key={index} >

                </CardLoading>
                ))}
        </>
    )
};

export default LoadingAssets