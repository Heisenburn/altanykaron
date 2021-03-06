import styled from "styled-components";
import DESKTOP_MEDIA_QUERY from "../constants/screenSize";
import { DesktopSecondaryNavigation } from "../shared/components/Navigation/Navigation.theme";

const Heading = styled.div`
  display: flex;
  padding-top: 150px;
  flex-direction: column;

  #additionalPriceInfo {
    background: #337ab7;
    color: white;
    border-top-left-radius: 20px;
    padding: 10px;
    font-size: 14px;
    text-align: right;
    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      text-align: left;
      border-radius: 0;
    }
  }

  #price {
    background: #00598b;
    color: white;
    border-top-left-radius: 20px;
    padding: 10px;
    border-top-right-radius: 20px;
    text-align: right;
    width: 270px;
    text-align: center;
    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      margin-top: 10px;
      text-align: left;
      border: none;
    }
  }

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-size: 16px;
    width: 40%;
    padding-bottom: 10px;

    :before {
      content: "<";
    }

    &:hover {
      color: ${({ theme }) => theme.brown};
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
    padding-top: 100px;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
  }
  h1,
  p {
    margin: 0;
  }
`;

export default Heading;
