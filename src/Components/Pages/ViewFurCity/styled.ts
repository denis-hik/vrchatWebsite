import styled from "styled-components";

export const BackImage = styled.div`
  overflow: hidden;
  .block {
    height: 100vh;
    position: relative;
    -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .block img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    .block {
      height: 35vh;
    }
  }

  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
    }
    100% {
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(1000px);
      transform: translateY(1000px);
    }
    100% {
      -webkit-transform: translateY(30px);
      transform: translateY(30px);
    }
  }

`