import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div<{outline?: boolean, isTitle?: boolean}>`
  border-radius: 20px;
  padding: 10px;
  border: solid 1px ${props => props?.outline ? isDark ? '#1e1e5f' : colors.blue : "none"};
  background: ${props => props?.outline ? "transparent" : isDark ? '#1e1e5f' : colors.blue};
  display: flex;
  gap: 10px;
  margin: 0 0 10px 0;
  margin-top: ${props => props?.isTitle ? "10px" : "unset"};
  position: relative;
`;

export const Title = styled.span`
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
`