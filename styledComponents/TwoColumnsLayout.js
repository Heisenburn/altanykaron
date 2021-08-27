import styled from "styled-components";

const TwoColumnsLayout = styled.div`
  display: flex;

  &.footerColumns {
    > .column:first-of-type {
      flex-basis: 570px;
      #companyInfo {
        width: 340px;
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
      width: 50vw;
      max-height: 920px;
      height: 920px;
    }

    #heroDescription {
      background-color: ${({ theme }) => theme.brownLight};
      color: white;
      h1 {
        padding: 152px 0 89px;
      }
    }
  }
`;

export default TwoColumnsLayout;
