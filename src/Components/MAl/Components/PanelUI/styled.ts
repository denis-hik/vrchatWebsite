import styled from 'styled-components';
import {getDark} from "../../Scripts/getDark";

const isDark = getDark();

export const Body = styled.div`
  width: 35vh;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  .panel {
    height: calc(100vh - 16px);
    width: 100%;
    padding: 8px;
    position: relative;
    background: ${props => isDark ? '#363535' : '#FFFFFF'};
    border-radius:  0 20px 20px 0;
    overflow-y: auto;
    -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35);
    
    .backText:hover {
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: center left;
      background-image: url("data:image/png;base64,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");
    }
  }
  
  .panel::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1000px) {
    z-index: 0;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
    
    .panel {
      width: 100%;
      height: 70vh;
      border-radius: 20px 20px 0 0;
    }
  }

`;