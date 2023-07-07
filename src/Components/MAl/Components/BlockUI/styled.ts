import styled from "styled-components";
import {colors} from "../../config/colors";
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();
export const Body = styled.div `
  position: relative;
  border-radius: 20px;
  padding: 10px;
  border: solid 1px ${props => isDark ? '#1e1e5f' : colors.blue};
  background: transparent;
  display: block;
  margin: 0 0 10px 0;
  margin-top: 15px;
  position: relative;
  
  .title-block {
    position: absolute;
    color: ${props => isDark ? '#1e1e5f' : colors.blue };
    top: -16px;
    left: 15px;
    padding: 0 7px;
    background: ${props => isDark ? "#363535" : "white"};

    text-align: center;
    font-size: 16px;
    font-family: Arial;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
`