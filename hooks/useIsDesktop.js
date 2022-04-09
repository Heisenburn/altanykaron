import DESKTOP_MEDIA_QUERY from "../domains/constants/screenSize";
import { useWindowSize } from "./useWindowSize";

export const useIsDesktop = () => {
  const size = useWindowSize();
  if (size.width >= DESKTOP_MEDIA_QUERY.split("px")[0]) {
    return true;
  }
  return false;
};
