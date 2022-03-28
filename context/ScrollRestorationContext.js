import { createContext, useState } from "react";

export const ScrollRestorationContext = createContext(false);

export const ScrollRestorationContextWrapper = ({ children }) => {
  const [shouldRestoreScrollPosition, setShouldRestoreScrollPosition] =
    useState(false);

  const updateShouldRestore = (newValue) => {
    setShouldRestoreScrollPosition(newValue);
  };

  return (
    <ScrollRestorationContext.Provider
      value={{
        shouldRestoreScrollPosition,
        updateShouldRestore,
      }}
    >
      {children}
    </ScrollRestorationContext.Provider>
  );
};
