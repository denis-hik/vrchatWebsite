import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
  border-radius: 20px;
  padding: 10px;
  background: ${props => isDark ? '#1e1e5f' : '#61dafb'};
  display: flex;
  margin: 0 0 10px 0;
`;