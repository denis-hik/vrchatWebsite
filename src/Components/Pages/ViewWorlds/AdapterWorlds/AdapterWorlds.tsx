import React from "react";
import { worldsTypes } from "../../../../Backend/types";
import {Body} from "../styled";
import Button from "../../../MAl/ButtonUI";



interface propsI {
    data: worldsTypes[];
    setIndex: (index: number) => void
}


const AdapterWorlds = (props: propsI): JSX.Element => {

    return (
        <div>
            {props.data.map(({name, url, image, ex}, index) => (
                <div key={index}>
                    <Button
                        image={image}
                        text={name}
                        onClick={() => props.setIndex(index)}
                    />
                </div>
            ))}
        </div>
    )
};

export default AdapterWorlds;