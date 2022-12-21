import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;

  .banner {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
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