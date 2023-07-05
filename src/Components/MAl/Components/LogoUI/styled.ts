import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";
import {colors} from "../../config/colors";

const isDark = getDark();

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => isDark ? '#1e1e5f' : colors.blue};
  img {
    object-fit: cover;
  }
`;