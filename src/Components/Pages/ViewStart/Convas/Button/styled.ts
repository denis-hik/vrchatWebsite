import styled from "styled-components";
import {getDark} from "../../../../MAl/Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
    margin: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => isDark ? '#1e1e5f' : '#61dafb'};
    border-radius: 20px;
  a {

    color: ${props => isDark ? '#363535' : '#FFFFFF'} !important;
  }
`;