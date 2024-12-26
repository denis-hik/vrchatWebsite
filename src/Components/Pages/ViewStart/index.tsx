import React from 'react';
import ButtonsMenu from "./Convas/ButtonsMenu";
import bg from '../../../media/worldsBG.jpeg';

import style from "./ViewStart.module.css"
import BodyUI from "../../MAl/Components/BodyUI";

interface propsI {

}

const ViewStart = (props:propsI):JSX.Element => {

    return (
        <BodyUI>
            <img
                className={style.banner}
                src={bg}
                alt={'Banner_image'}
            />
            <ButtonsMenu />
        </BodyUI>
    )
}

export default ViewStart;