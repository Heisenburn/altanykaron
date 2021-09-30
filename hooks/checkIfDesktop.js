import { useWindowSize } from "../hooks/getWindowSize";

export const checkIfDesktop = () => {
  const size = useWindowSize();
  if (size.width >= 1023) {
    return true;
  }
  return false;
};
