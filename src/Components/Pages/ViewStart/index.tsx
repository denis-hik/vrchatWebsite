import React from 'react';
import Convas from "./Convas/Convas";
import bg from '../../../media/worldsBG.png';

import style from "./ViewStart.module.css"

interface propsI {

}

const ViewStart = (props:propsI):JSX.Element => {

    return (
        <div className={style.body}>
            <img
                className={style.banner}
                src={bg}
                alt={'Banner_image'}
            />
            <Convas />
        </div>
    )
}

export default ViewStart;