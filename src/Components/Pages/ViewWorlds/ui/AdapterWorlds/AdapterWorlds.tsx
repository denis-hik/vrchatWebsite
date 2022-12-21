import React from "react";
import { worldsTypes } from "../../../../../Backend/types";
import {Body} from "../../styled";
import Button from "../../../../MAl/Components/ButtonUI";
import {dataWorldType} from "../../../ViewAssets";
import {ListMapVerticalUI} from "../../../../MAl/Components/ListMapVerticalUI";



interface propsI {
    data: dataWorldType[];
    setIndex: (index: number) => void
}


const AdapterWorlds = (props: propsI): JSX.Element => {

    return (
        <ListMapVerticalUI>
            {props.data.map(({title, tag, image,fav}, index) => (
                <div key={index}>
                    <Button
                        image={image}
                        text={title}
                        onClick={() => props.setIndex(index)}
                    />
                </div>
            ))}
        </ListMapVerticalUI>
    )
};

export default AdapterWorlds;