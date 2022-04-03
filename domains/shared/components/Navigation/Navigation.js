import Image from "next/image";
import Link from "next/link";
import { useIsDesktop } from "../../../../hooks/useIsDesktop";
import {
  MobileSecondaryNavigation,
  NavigationHome,
  GlobalStyle,
  DesktopSecondaryNavigation,
} from "./Navigation.theme";
import { useState } from "react";
import { ScrollRestorationContext } from "../../../../context/ScrollRestorationContext";
import { useContext } from "react";

const getNavJSX = (handleHashClick, updateShouldRestore) => {
  const handleHomeClick = () => updateShouldRestore(false);

  return (
    <ul>
      <li>
        <Link href="/">
          <a onClick={handleHomeClick}>home</a>
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

export const Navigation = ({ isHome = true }) => {
  const isDesktop = useIsDesktop();
  const { updateShouldRestore } = useContext(ScrollRestorationContext);

  const [isNavMobileExpanded, setNavMobileExpanded] = useState(false);

  const handleMobileNavClick = () => {
    setNavMobileExpanded((prevState) => !prevState);
  };

  const getNavigationWrapper = (isHome) => {
    if (isHome) {
      return NavigationHome;
    } else {
      return DesktopSecondaryNavigation;
    }
  };

  const NavigationDesktop = getNavigationWrapper(isHome);

  return isDesktop ? (
    <NavigationDesktop>
      {!isHome ? (
        <Image
          src="/images/logo-white-letters.svg"
          width={130}
          height={20}
          layout="fixed"
          alt="logo strony"
        />
      ) : null}
      {getNavJSX(null, updateShouldRestore)}
    </NavigationDesktop>
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

        {isNavMobileExpanded
          ? getNavJSX(handleMobileNavClick, updateShouldRestore)
          : null}
      </MobileSecondaryNavigation>
    </>
  );
};
