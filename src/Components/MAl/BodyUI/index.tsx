import React from "react";
import {Div} from "./styled";

const Body: React.FC = ({children}) => {

    return (
        <Div>
            {children}
        </Div>
    )
};

export default Body;