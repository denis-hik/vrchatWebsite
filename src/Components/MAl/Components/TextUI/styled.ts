import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => !isDark ? '#363535' : '#FFFFFF'};
`;