import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  @media (max-width: 1000px) {
    .banner {
      height: 50%;
    }
  }
`
