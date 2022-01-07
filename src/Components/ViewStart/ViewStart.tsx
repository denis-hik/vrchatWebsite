import React from 'react';

import style from "./ViewStart.module.css"
import Convas from "./Convas/Convas";

interface propsI {

}

const ViewStart = (props:propsI):JSX.Element => {

    return (
        <div className={style.body}>
            <img
                className={style.banner}
                src={'https://i.ytimg.com/vi/Zg6A1Fpf2gA/maxresdefault_live.jpg'}
                alt={'Banner_image'}
            />
            <Convas />
        </div>
    )
}

export default ViewStart;