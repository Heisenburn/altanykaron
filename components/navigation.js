import Image from "next/image";
import { checkIfDesktop } from "../hooks/checkIfDesktop";
import Container from "../styledComponents/container";
import { NavigationMobile, NavigationDesktop } from "../styledComponents/nav";
import { useState } from "react";

const NAV_ELEMENTS = ["home", "oferta", "cennik", "kontakt"];

export const Navigation = () => {
  const isDesktop = checkIfDesktop();

  const [isNavMobileExpanded, setNavMobileExpanded] = useState(false);

  const handleMobileNavClick = () => {
    setNavMobileExpanded((prevState) => !prevState);
  };
  return (
    <>
      {isDesktop ? (
        <NavigationDesktop>
          <ul>
            {NAV_ELEMENTS.map((linkElement) => {
              return <li>{linkElement}</li>;
            })}
          </ul>
        </NavigationDesktop>
      ) : (
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
            <ul>
              {NAV_ELEMENTS.map((linkElement) => {
                return <li>{linkElement}</li>;
              })}
            </ul>
          ) : null}
        </NavigationMobile>
      )}
    </>
  );
};
