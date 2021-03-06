import React, {useState} from 'react';
import Convas from "./Convas/Convas";
import bg from '../../../media/worldsBG.png';

import style from "./ViewStart.module.css"
import BodyUI from "../../MAl/Components/BodyUI";

interface propsI {

}

const ViewStart = (props:propsI):JSX.Element => {

    const [value, setVAlue] = useState('');

    return (
        <BodyUI>
            <img
                className={style.banner}
                src={bg}
                alt={'Banner_image'}
            />
            <Convas />
            <input value={value} onChange={(el) => setVAlue(el.target.value)} />
        </BodyUI>
    )
}

export default ViewStart;