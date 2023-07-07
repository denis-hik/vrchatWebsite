import styled from "styled-components";
import {getDark} from "../../../../Scripts/getDark";
import {colors} from "../../../../config/colors";

const isDark = getDark();
export const Body = styled.div<{color?: string, isActive?: boolean}> `
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${props => props?.color ? props.color : "#fff" };
  opacity: ${props => props?.isActive ? 1 : 0.6 };
  height: 48px;
  border-radius: 10px;
  color: ${props => isDark ? props.isActive ? "#000" : colors.whiteDark : colors?.white };
`