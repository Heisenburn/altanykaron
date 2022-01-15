import Image from "next/image";
import Link from "next/link";
import { checkIfDesktop } from "../../hooks/checkIfDesktop";
import {
  MobileSecondaryNavigation,
  NavigationHome,
  GlobalStyle,
  DesktopSecondaryNavigation,
} from "./Navigation.theme";
import { useState } from "react";

const getNavJSX = (handleHashClick) => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/#oferta">
          <a onClick={handleHashClick}>oferta</a>
        </Link>
      </li>
      <li>
        <Link href="/galeria">
          <a>galeria</a>
        </Link>
      </li>
      <li>
        <Link href="/kontakt">
          <a>kontakt</a>
        </Link>
      </li>
    </ul>
  );
};

//TODO: używaj useCallBack

export const Navigation = ({ isHome = true }) => {
  const isDesktop = checkIfDesktop();

  const [isNavMobileExpanded, setNavMobileExpanded] = useState(false);

  const handleMobileNavClick = () => {
    setNavMobileExpanded((prevState) => !prevState);
  };

  const getNavigationWrappers = (isHome) => {
    if (isHome) {
      return NavigationHome;
    } else {
      return DesktopSecondaryNavigation;
    }
  };

  const NavigationDesktop = getNavigationWrappers(isHome);

  return isDesktop ? (
    <NavigationDesktop>{getNavJSX()}</NavigationDesktop>
  ) : (
    <>
      <GlobalStyle isNavMobileExpanded={isNavMobileExpanded} />
      <MobileSecondaryNavigation isNavMobileExpanded={isNavMobileExpanded}>
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

        {isNavMobileExpanded ? getNavJSX(handleMobileNavClick) : null}
      </MobileSecondaryNavigation>
    </>
  );
};
