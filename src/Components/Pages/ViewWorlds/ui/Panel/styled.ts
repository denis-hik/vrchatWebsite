import styled from 'styled-components';

export const Body = styled.div`
  width: 35vh;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .panel {
    height: 100vh;
    width: 100%;
    padding: 8px;
    background: white;
    border-radius:  0 20px 20px 0;
    overflow-y: auto;
    -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35);
    box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35);
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