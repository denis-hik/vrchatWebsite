import styled from "styled-components";
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div<{error?: string}>`
    & {
      background-color: ${props => props?.error ? "rgba(255,0,0,0.5)" : isDark ? '#1e1e5f' : colors.blue};
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
      
      .error {
        color: ${props => isDark ? '#000000' : "white"};
        margin-left: 5px;
      }
    }
`;