import styled from "styled-components";
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();
export const Body = styled.div<{isError: boolean, disable?: boolean}> `
  cursor: ${props => props?.disable ? "not-allowed" : "pointer" };
  position: relative;
  
  input {
    width: 1.3em;
    height: 1.3em;
    background-color: ${props => props?.isError ? "rgba(255,0,0,0.5)" : isDark ? colors.whiteDark : colors.white };
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid ${props => props?.isError ? "rgba(255,0,0,0.5)" : isDark ? colors.whiteDark : colors.blue };
    appearance: none;
    -webkit-appearance: none;
    outline: none;
  }
  
  input:checked {
    background: ${props => isDark ? colors.blueDark : colors.blue };
  }
  
  label {
    margin-left: 10px;
    cursor: ${props => props?.disable ? "not-allowed" : "pointer" };
    color:  ${props => props?.isError ? "rgba(255,0,0,0.5)" : isDark ? colors.whiteTextDark : colors.whiteText };;
  }
  
  .disable-tooltip {
    position: absolute;
    right: 0;
    top: 0;
    visibility: hidden;
    background: rgba(255,0,0,0.5);
    border-radius: 5px;
    padding: 5px 3px;
    color: ${props => isDark ? '#000000' : "white"};
  }
  
  &:hover .disable-tooltip {
    visibility: visible;
  }
  
  @media (max-width: 1000px) {
    margin-bottom: 35px;
    .disable-tooltip {
      position: absolute;
      visibility: visible;
      bottom: -35px;
      top: 25px;
      left: 0;
      right: 0;
    }
  }
`