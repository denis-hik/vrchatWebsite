import styled from "styled-components";
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
    & {
      background-color: ${props => isDark ? '#1e1e5f' : '#61dafb'};
      border-radius: 20px;
      padding: 10px;
      
      input {
        width: -webkit-fill-available;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 5px;
        background-color: ${props => isDark ? '#555353' : '#FFFFFF'};
        text-align: center;
      }
    }
`;