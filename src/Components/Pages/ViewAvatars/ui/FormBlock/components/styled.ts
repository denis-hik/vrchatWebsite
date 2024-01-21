import styled from "styled-components";
import {getDark} from "../../../../../MAl/Scripts/getDark";
import {colors} from "../../../../../MAl/config/colors";
const isDark = getDark();
export const BodyItem = styled.div `
  padding: 5px;
  background: ${props => isDark ? colors.blueDark : colors.blue};
  height: 70px;
  display: flex;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 10px;
    height: 70px;
    width: 70px;
    object-fit: cover;
  }

  span {
    margin-left: 10px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    color: ${props => isDark ? colors.whiteTextDark : colors.white};
  }

  .sel {
    position: absolute;
    left: 75px;
    background: green;
    height: 20px;
    border-radius: 5px;
    padding: 3px;
    color: ${props => isDark ? colors.whiteTextDark : colors.white};
    margin-left: 10px;
  }
  
  .close {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='53.7' height='53.7' viewBox='0 0 53.7 53.7'><path opacity='.6' fill='%23FFFFFF' d='M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z'/></svg>");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: -10px;
    top: -5px;
    cursor: pointer;
    padding-left: 5px;
    width: 50px !important;
    height: 50px;
  }
`