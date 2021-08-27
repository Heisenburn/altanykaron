import { useWindowSize } from "../hooks/getWindowSize";

export const checkIfDesktop = () => {
  const size = useWindowSize();
  if (size.width >= 1024) {
    return true;
  }
  return false;
};
