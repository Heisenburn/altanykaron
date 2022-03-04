import Router, { NextRouter } from "next/router";
import { useEffect } from "react";

const saveScrollPosition = (url) => {
  const scrollPosition = { x: window.scrollX, y: window.scrollY };

  try {
    sessionStorage.setItem(url, JSON.stringify(scrollPosition));
  } catch (error) {
    console.error(error);
  }
};

const restoreScrollPosition = (url) => {
  console.log("restoreScrollPosition runs");
  try {
    const sessionUrl = sessionStorage.getItem(url);

    if (!sessionUrl) {
      return;
    }

    const scrollPosition = JSON.parse(sessionUrl);
    if (scrollPosition) {
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }
  } catch (error) {
    console.error(error);
  }
};

export const useScrollRestoration = (router) => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      let shouldScrollRestore = false;

      window.history.scrollRestoration = "manual";
      restoreScrollPosition(router.asPath);

      const onBeforeUnload = () => {
        saveScrollPosition(router.asPath);
        delete event["returnValue"];
      };

      const onRouteChangeStart = () => {
        saveScrollPosition(router.asPath);
      };

      const onRouteChangeComplete = (url) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPosition(url);
        }
      };

      window.addEventListener("beforeunload", onBeforeUnload);
      Router.events.on("routeChangeStart", onRouteChangeStart);
      Router.events.on("routeChangeComplete", onRouteChangeComplete);
      Router.beforePopState(() => {
        shouldScrollRestore = true;

        return true;
      });

      return () => {
        window.removeEventListener("beforeunload", onBeforeUnload);
        Router.events.off("routeChangeStart", onRouteChangeStart);
        Router.events.off("routeChangeComplete", onRouteChangeComplete);
        Router.beforePopState(() => true);
      };
    }
  }, [router.asPath]);
};
