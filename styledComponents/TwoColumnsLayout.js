import styled from "styled-components";

const TwoColumnsLayout = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: ${({ columnReverse }) =>
      columnReverse ? "column-reverse" : "column"};
  }

  &.footerColumns {
    > .column:first-of-type {
      @media screen and (min-width: 1024px) {
        flex-basis: 570px;
      }
      #companyInfo {
        width: 340px;
        @media screen and (max-width: 1024px) {
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
      @media screen and (min-width: 1024px) {
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
      @media screen and (max-width: 1024px) {
        padding: 40px 0 80px;
      }
      h1 {
        padding: 152px 0 89px;
        @media screen and (max-width: 1024px) {
          padding: 40px 0;
          margin: 0;
        }
      }
    }
  }
`;

export default TwoColumnsLayout;
