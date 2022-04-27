import {Body} from "./styled";
import React, {useCallback} from "react";

type PropsI = {
    src: string;
    urlOpen?: string | URL ;
}

export const LogoUI:React.FC<PropsI> = ({src, urlOpen}) => {

    const openUrl = useCallback(() => {
        urlOpen && urlOpen && window.open(urlOpen);
    }, [])

    return (
        <Body>
            <img
                onClick={openUrl}
                src={src}
                alt={'logo_athor'}
            />
        </Body>
    )
}