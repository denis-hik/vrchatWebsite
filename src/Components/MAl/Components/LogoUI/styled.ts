import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => isDark ? '#1e1e5f' : '#61dafb'};
  img {
    object-fit: cover;
  }
`;