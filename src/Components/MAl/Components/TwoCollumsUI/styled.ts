import styled from "styled-components";

export const Body = styled.div<{justifyContent?: string}>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props?.justifyContent ? props?.justifyContent : "space-between"};
  align-items: center;
  
`;