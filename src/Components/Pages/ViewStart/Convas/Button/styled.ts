import styled from "styled-components";
import {getDark} from "../../../../MAl/Scripts/getDark";
import {colors} from "../../../../MAl/config/colors";

const isDark = getDark();

export const Body = styled.div <{color?:string}>`
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color ? props.color : isDark ? '#1e1e5f' : colors.blue};
    border-radius: 20px;
  a {
    width: 100%;
    text-align: center;
    color: ${props => isDark ? colors.whiteTextDark : colors.white} !important;
  }
`;