import styled, { createGlobalStyle } from "styled-components";

const Nav = styled.nav`
  z-index: 999999999999;

  ul {
    list-style: none;

    li {
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      cursor: pointer;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export const NavigationDesktop = styled.nav`
  ${({ isHome, theme }) =>
    isHome
      ? `
  margin: 0;
  padding-top: 68px;
  ul {
    justify-content: space-between;
    display: flex;
    list-style: none;
    color: white;
    width: 100%;
    padding-left: 0;

    margin: 0;
    li {
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
  `
      : `
    
    display: block;
    background-color: ${theme.brown};
    position: fixed;
    width: 100vw;
    height: 90px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    
    ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 60%;
    padding: 0 90px
      }
    }
  `};
`.withComponent(Nav);

export const NavigationMobile = styled.nav`
  padding: 20px;
  position: fixed;
  width: 100vw;
  background-color: ${({ theme }) => theme.brown};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -5px 19px 4px rgba(0, 0, 0, 0.15);
  flex-direction: ${({ isNavMobileExpanded }) =>
    isNavMobileExpanded ? "column" : ""};
  height: ${({ isNavMobileExpanded }) =>
    isNavMobileExpanded ? "100vh" : "auto"};
  background-image: ${({ isNavMobileExpanded }) =>
    isNavMobileExpanded ? "url(/images/triangles.svg)" : "none"};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  ul {
    height: ${({ isNavMobileExpanded }) =>
      isNavMobileExpanded ? "100vh" : "auto"};
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      &:first-of-type {
        padding-top: 100px;
      }
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
      color: white;
      padding-bottom: 75px;
    }
  }

  #nav-logo-and-hamburger {
    display: flex;
    height: ${({ isNavMobileExpanded }) =>
      isNavMobileExpanded ? "auto" : "100%"};
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  #hamburgerBar {
    width: 36px;
    height: 24px;
    position: relative;
    background-color: transparent;
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    border: none;

    & span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: white;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }

    & span:nth-child(1) {
      top: 0px;
    }

    & span:nth-child(2),
    & span:nth-child(3) {
      top: 12px;
    }

    & span:nth-child(4) {
      top: 24px;
    }

    &.open span:nth-child(1) {
      top: 18px;
      width: 0;
      left: 50%;
    }

    &.open span:nth-child(2) {
      transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg);
    }

    &.open span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
`.withComponent(Nav);

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isNavMobileExpanded }) =>
      isNavMobileExpanded ? "hidden" : "auto"};
  }
`;
