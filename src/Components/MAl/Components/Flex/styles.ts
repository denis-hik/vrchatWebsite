import styled from "styled-components";
import {CSSProperties} from "react";

type TFlexStyled = {
    direction: CSSProperties["flexDirection"]
} & any
export const FlexStyled = styled.div<TFlexStyled> `
  display: flex;
  flex-direction: ${(props) => props.direction} ;
`