import styled from "styled-components";
import {Body} from "../../../../MAl/WorldShow/styled";
import {getDark} from "../../../../MAl/Scripts/getDark";
import {colors} from "../../../../MAl/config/colors";

const isDark = getDark();
export const BodyStatus = styled(Body)`
  .text {
    color ${props => isDark ? colors?.whiteTextDark : "#000"}
  }
  
  .title-block {
    color: ${props => isDark ? '#6e6ec0' : undefined};
  }
  
  a {
    color: ${props => isDark ? '#6e6ec0' : '#61dafb'};
  }
`