import styled from "styled-components";

export const Body = styled.div<{justifyContent?: string, gap?: string | number}>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props?.justifyContent ? props?.justifyContent : "space-between"};
  align-items: center;
  gap: ${props => props.gap};
`;