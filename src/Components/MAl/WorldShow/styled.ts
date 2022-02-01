import styled from 'styled-components';

export const Body = styled.div`
  width: 35vw;
  height: 100vh;
  background: white;
  border-radius: 20px;
  padding-right: 10px;
  position: absolute;
  left: calc(427px - 4vw);
  bottom: 0;
  padding-left: 5vw;
  
  .close {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='53.7' height='53.7' viewBox='0 0 53.7 53.7'><path opacity='.6' fill='%23666E6E' d='M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z'/></svg>");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    padding-left: 5px;
    width: 50px;
    height: 50px;
  }
  
  @media(min-width: 1000px) {
    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  
  @media(max-width: 1000px) {
    width: calc(100vw - 20px);
    height: 72vh;
    background: white;
    border-radius: 20px 20px 0 0 ;
    padding: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(-10wv);
      transform: translateX(-10vw);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(-10vw);
      transform: translateX(-10vw);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;