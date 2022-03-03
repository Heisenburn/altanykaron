import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 80%;

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};

    &:before {
      content: "\\25c4";
      font-size: 30px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 100%;
  }

  img {
    background-color: #c0c1c926;
  }

  .fullscreen {
    .image-gallery-fullscreen-button {
      svg {
        display: none;
      }
      &::after {
        content: "\\2715";
        position: absolute;
        bottom: 85vh;
        right: 24px;
        color: white;
        font-size: 40px;
        font-weight: 500;
        line-height: 1;
      }
    }
  }
`;

export default SliderWrapper;
