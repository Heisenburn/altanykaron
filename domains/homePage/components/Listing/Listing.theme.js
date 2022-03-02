import styled from "styled-components";

const ListingWrapper = styled.div`
  & > div {
    padding-bottom: 134px;
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  background-color: ${({ theme }) => theme.gray};
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;

  .seeAllOffers {
    background: #57423f;
    color: white;
    display: block;
    margin: 0 auto;
    font-size: 14px;
    position: relative;
    font-weight: 500;
    z-index: 9;
    border-radius: 4px;
  }

  .triangle {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 130vh 500vw;
    border-color: transparent transparent #57423f2e transparent;
    position: absolute;
    left: -400vw;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  ul {
    margin-top: 0;
    padding: 140px 60px 0;
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1023px) {
      padding: 0;
      margin: 0;
    }
  }
  li {
    width: 100%;
    background: white;
    margin: 52px 0;
    max-width: 1400px;
    z-index: 1;
    position: relative;
    overflow: hidden;

    display: flex;
    @media screen and (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 97px 0;
    }
 
    .image-container {
      width: 307px !important;
      height: 270px !important;
      
      & > *{
   
        width: 307px !important;
        height: 270px !important;
      }
    
    }
    }

    .listingItem-data {
      width: 100%;
      padding-left: 38px;
      display: flex;
      flex-direction: column;
      position: relative;

      @media screen and (max-width: 1023px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        text-align: center;
      }

      h3 {
        margin-top: 23px;
      }
    }

    .priceButton {
      background-color: ${({ theme }) => theme.blue};
      width: 146px;
      height: 50px;
      position: absolute;
      bottom: 23px;
      right: 38px;
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 1023px) {
        position: static;
        padding: 0;
        width: 100%;
      }
    }
  }
`;

export default ListingWrapper;
