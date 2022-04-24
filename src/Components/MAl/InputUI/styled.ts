import styled from "styled-components";

export const Body = styled.div`
    & {
      background-color: aliceblue;
      border-radius: 20px;
      padding: 10px;
      
      input {
        width: -webkit-fill-available;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 5px;
        text-align: center;
      }
    }
`;