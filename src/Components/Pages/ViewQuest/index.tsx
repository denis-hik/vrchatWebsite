import React, {useState} from 'react';
import bg from '../../../media/worldsBG.jpeg';
import {Convas} from "./Convas";
import {Body, Banner} from './styled'
import BodyUI from "../../MAl/Components/BodyUI";

const ViewQuest = (): JSX.Element => {

    const [value, setVAlue] = useState('');



    return (
        <BodyUI>
            <Banner
                src={bg}
                alt={'Banner_image'}
            />
            <Convas/>
            <input value={value} onChange={(el) => setVAlue(el.target.value)}/>
        </BodyUI>
    )
}

export default ViewQuest;