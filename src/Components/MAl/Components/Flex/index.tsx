import React, {ComponentProps, CSSProperties} from "react";
import {FlexStyled} from "./styles";

type TFlex = {
    direction?: CSSProperties["flexDirection"]
} & ComponentProps<"div">
const Flex: React.FC<TFlex> = ({direction = "row", children, ...props}) => {

    return (
        <FlexStyled direction={direction} {...props}>
            {children}
        </FlexStyled>
    )
}

export default Flex