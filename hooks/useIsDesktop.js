import { useWindowSize } from "./useWindowSize";

export const useIsDesktop = () => {
  const size = useWindowSize();
  if (size.width >= 1023) {
    return true;
  }
  return false;
};
