import styled from "styled-components";
import {getDark} from "../../../../MAl/Scripts/getDark";
const isDark = getDark()
export const BodyModal = styled.div `
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: end;
  
  .panel {
    width: 50%;
    height: 400px;
    border-radius: 20px 20px 0 0;
    background: ${props => isDark ? '#363535' : '#FFFFFF'};
    transition: .3s ease;
    -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @media (max-width: 700px) {
        width: 100%;
        height: 70vh;
        border-radius: 20px 20px 0 0;
    }

    @media (max-width: 1000px ) and (min-width: 700px){
        width: 70%;
        height: 50vh;
        border-radius: 20px 20px 0 0;
    }
    .top-block {
      display: flex;
      justify-content: space-between;
      align-items: center;

        margin-top: 10px;
      
      .notoutline {
        margin-right: 10px;
        
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          filter: invert(100%);
        }
      }

      img {
        margin-left: 10px;
        border-radius: 10px;
        overflow: hidden;
        height: 100px;
        width: 100px;
      }
    }
    
    .images-block {
      
      .list-type {
        display: flex;
        overflow: hidden;
        overflow-x: auto;
        flex-wrap: nowrap;
        margin: 10px 5px;
        gap: 5px;

        img {
          border-radius: 10px;
          width: 170px;
          height: 28vh;

          @media (max-width: 700px) {
            width: 230px;
            height: 49vh;
          }

          @media (max-width: 1000px ) and (min-width: 700px){
            width: 200px;
            height: 350px;
            object-fit: cover;
          }
        }
      }
    }
    
    &.step1 {
      height: 400px;
      width: 40%;
      

      @media (max-width: 700px) {
        width: 100%;
        height: 50vh;
        border-radius: 20px 20px 0 0;
      }
    }
    .step-2 {
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        -webkit-animation:spin 1s linear infinite;
        -moz-animation:spin 1s linear infinite;
        animation:spin 1s linear infinite;
      }
    }
  }

  @-moz-keyframes spin {
    100% { -moz-transform: rotate(-360deg); }
  }
  @-webkit-keyframes spin {
    100% { -webkit-transform: rotate(-360deg); }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(-360deg);
      transform:rotate(-360deg);
    }
  }

  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  
  
`