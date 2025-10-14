import styled from 'styled-components';

export const Body = styled.div<{invertXBanner?: boolean}>`
  width: 100%;

  .banner {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${(props) => props?.invertXBanner ? "scaleX(-1)" : "scaleX(1)"};
    object-fit: cover;
    transition: opacity 0.2s ease;
  }

    .fade-in {
        opacity: 1;
    }

    .fade-out {
        opacity: 0;
    }

  @media (max-width: 1000px) {
    .banner {
      height: 30%;
    }
  }
  @media (min-width: 1000px) {
    .banner {
      width: calc(100%  - 300px);
      margin-left: 300px;
    }
  }
`;