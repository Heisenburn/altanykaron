import Image from "next/image";
import Link from "next/link";
import { checkIfDesktop } from "../../hooks/checkIfDesktop";
import { NavigationMobile, NavigationDesktop } from "./Navigation.theme";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";

const NAV_ELEMENTS = ["home", "oferta", "galeria", "kontakt"];

const getNavJSX = ()=>{
  return(

      <ul>
        {NAV_ELEMENTS.map((linkElement) => {
          return <li><Link href={linkElement === "oferta" ? "/#oferta" : linkElement}>{linkElement}</Link></li> })}
      </ul>
  )
}

export const Navigation = () => {
  const isDesktop = checkIfDesktop();

  const [isNavMobileExpanded, setNavMobileExpanded] = useState(false);

  const handleMobileNavClick = () => {
    setNavMobileExpanded((prevState) => !prevState);
  };

  const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isNavMobileExpanded }) =>
      isNavMobileExpanded ? "hidden" : "auto"};
  }
`;
  return (
    <>
      {isDesktop ? (
        <NavigationDesktop>
          {getNavJSX()}
        </NavigationDesktop>
      ) : (
        <>
          <GlobalStyle isNavMobileExpanded={isNavMobileExpanded} />
          <NavigationMobile isNavMobileExpanded={isNavMobileExpanded}>
            <div id="nav-logo-and-hamburger">
              <Image
                src="/images/logo-white-letters.svg"
                width={130}
                height={20}
                layout="fixed"
                alt="logo strony"
              />
              <button
                id="hamburgerBar"
                className={isNavMobileExpanded ? "open" : ""}
                onClick={handleMobileNavClick}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            {isNavMobileExpanded ? (
                getNavJSX()
            ) : null}
          </NavigationMobile>
        </>
      )}
    </>
  );
};
