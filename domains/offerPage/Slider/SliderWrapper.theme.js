import styled from "styled-components";
import DESKTOP_MEDIA_QUERY from "../../constants/screenSize";

const SliderWrapper = styled.div`
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};

    &:before {
      content: "\\25c4";
      font-size: 30px;
    }
  }

  img {
    background-color: #c0c1c926;
  }

  & > div.image-gallery {
    border: 1px solid #337ab7;
  }

  .fullscreen {
    border: none;
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
