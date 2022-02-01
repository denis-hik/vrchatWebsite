import React from "react";

import style from './Convas.module.css';
import Button from "./Button/Button";

interface propsI {

}

const Convas = (props: propsI): JSX.Element => {

    return (
        <div className={style.body}>
            <div className={style.panel}>
                <Button text={'Worlds'} url={'/worlds'}  />
            </div>

        </div>
    )
};

export default Convas;