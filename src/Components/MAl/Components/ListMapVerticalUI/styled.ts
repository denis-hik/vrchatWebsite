import styled from "styled-components";

export const Body = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap ? `${props.gap}px` : '10px'};
`;