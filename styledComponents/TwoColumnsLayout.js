import styled from "styled-components";

const TwoColumnsLayout = styled.div`
  display: flex;
  .logo {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 99999999 !important;
    width: 250px !important;
    height: 50px !important;
    padding: 68px 84px;
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
`;

export default TwoColumnsLayout;
