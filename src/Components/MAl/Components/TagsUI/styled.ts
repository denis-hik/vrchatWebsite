import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div`
  border-radius: 20px;
  padding: 10px;
  background: ${props => isDark ? '#1e1e5f' : colors.blue1};
  display: flex;
  margin: 0 0 10px 0;
`;