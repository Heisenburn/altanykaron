import { createContext, useState } from "react";

export const GallerySliderVisibilityContext = createContext(false);

export const GallerySliderVisibilityWrapper = ({ children }) => {
  const [isSliderDisplayed, setIsSliderDisplayed] = useState(false);

  const updateSliderVisibility = (newValue) => {
    setIsSliderDisplayed(newValue);
  };

  return (
    <GallerySliderVisibilityContext.Provider
      value={{
        isSliderDisplayed,
        updateSliderVisibility,
      }}
    >
      {children}
    </GallerySliderVisibilityContext.Provider>
  );
};
