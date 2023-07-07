import styled from "styled-components";
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();
export const Body = styled.div<{colors1?: string[]}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  gap: 10px;
  border-radius: 10px;
  height: 50px;
  border: 1px solid linear-gradient(90deg, ${props => !!props.colors1?.length
          // @ts-ignore
          ? props.colors1.map((color, index) => `${color} ${props?.colors1?.length / index}%`) 
          : isDark ? colors.blueDark : colors.blue});
`