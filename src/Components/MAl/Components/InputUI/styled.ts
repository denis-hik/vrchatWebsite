import styled from "styled-components";
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div<{error?: string, disable?: boolean}>`
    & {
      background-color: ${props => props?.error ? "rgba(255,0,0,0.5)" : isDark ? '#1e1e5f' : colors.blue};
      border-radius: ${props => props?.error ? "10px" : "15px"};
      padding: 10px;
      opacity: ${props => props.disable ? "0.7" : "1"};
      
      input {
        pointer-events: ${props => props.disable ? "none" : "unset"};
        width: -webkit-fill-available;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 5px;
        background-color: ${props => isDark ? '#555353' : '#FFFFFF'};
        text-align: center;
        cursor: ${props => props.disable ? "not-allowed" : "unset"};
      }
      
      .error {
        color: ${props => isDark ? '#000000' : "white"};
        margin-left: 5px;
      }
    }
`;