import styled from "styled-components";

export const CardLoading = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 8px;
  text-align: center;
  
  &.notoutline {
    background: #61dafb;
    color: white;
    
  }
  
  &.outline {
    background: white;
    color: #61dafb;
    & h4 {
      margin: 0;
    }
    margin: 0 10px 0 0;
  }
  
  & img {
    object-fit: cover;
    height: 20vh;
    width: 100%;
    border-radius: 20px;
  }
`;