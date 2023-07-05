import styled from "styled-components";
import {InputUI} from "../../MAl/Components/InputUI";

export const ImageTextTitleBody = styled.div<{height?: number}>`
  display: flex;
  position: relative;
  width: 100%;
  height: ${props => props?.height ? props?.height + "px" : "100px"};
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
  
  span {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  .hover_back {
    cursor: default;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(4,4,4);
    background: linear-gradient(90deg, rgba(4,4,4,1) 0%, rgba(0,0,0,0) 100%);
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    
  }
  .hover_back:hover {
    opacity: 1;
    cursor: pointer;
  }


  @media (max-width: 1000px) {
    .hover_back {
      opacity: 1;
    }
    span {
      font-size: 20px;
      justify-content: right;
      left: unset;
      right: 10px;
    }
  }
`
export const StatusInput = styled(InputUI)`
  margin-bottom: 10px;
`