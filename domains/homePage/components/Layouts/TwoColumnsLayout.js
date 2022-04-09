import styled from "styled-components";
import DESKTOP_MEDIA_QUERY from "../../../constants/screenSize";

const TwoColumnsLayout = styled.div`
  display: flex;

  @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
    flex-direction: ${({ columnReverse }) =>
      columnReverse ? "column-reverse" : "column"};
  }

  &.footerColumns {
    > .column:first-of-type {
      @media screen and (min-width: ${DESKTOP_MEDIA_QUERY}) {
        flex-basis: 570px;
      }
      #companyInfo {
        p {
          font-size: 16px;
        }
        width: 340px;
        @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
          width: auto;
        }
      }
    }
  }

  &.heroSectionColumns {
    .logo {
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      z-index: 99999999 !important;
      margin: 68px 84px;

      width: 250px !important;
      height: 50px !important;
    }
    .column {
      @media screen and (min-width: ${DESKTOP_MEDIA_QUERY}) {
        width: 50vw;
        max-height: 920px;
        &.imgColumn {
          height: 920px !important;
        }
      }
      &.imgColumn {
        height: 60vh;
      }
    }

    #heroDescription {
      background-color: ${({ theme }) => theme.brownLight};
      color: white;
      @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
        padding: 40px 0 80px;
      }
      h1 {
        padding: 132px 0 59px;
        @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
          padding: 40px 0;
          margin: 0;
        }
      }
    }
  }
`;

export default TwoColumnsLayout;
