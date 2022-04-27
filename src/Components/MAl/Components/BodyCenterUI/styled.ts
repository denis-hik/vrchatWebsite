import styled from "styled-components";
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .panel {
    position: relative;
    display: block;
    overflow: hidden;
    width: 50%;
    height: 50%;
    background: ${props => isDark ? '#363535' : '#FFFFFF'};
    border-radius: 20px;
  }

  @media (max-width: 1000px) {
    justify-content: center;
    align-items: flex-end;
    
    .panel {
      width: 100%;
      height: 70%;
      border-radius: 20px 20px 0 0;
    }
  }
`;