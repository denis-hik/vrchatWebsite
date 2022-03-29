import React, {useState} from 'react';
import Convas from "./Convas/Convas";
import bg from '../../../media/worldsBG.png';

import style from "./ViewStart.module.css"

interface propsI {

}

const ViewStart = (props:propsI):JSX.Element => {

    const [value, setVAlue] = useState('');

    return (
        <div className={style.body}>
            <img
                className={style.banner}
                src={bg}
                alt={'Banner_image'}
            />
            <Convas />
            <input value={value} onChange={(el) => setVAlue(el.target.value)} />
        </div>
    )
}

export default ViewStart;