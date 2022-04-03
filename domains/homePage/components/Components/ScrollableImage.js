import { useIsDesktop } from "../../../../hooks/useIsDesktop";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const ScrollableImage = ({ children }) => {
  const isDesktop = useIsDesktop();
  const [imageScale, setImageScale] = useState(1.0);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }
    const handleScroll = () => {
      setImageScale((window.scrollY + 10000) / 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  return (
    <Wrapper className="imageWrapper" zoom={imageScale}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 1023px) {
    img {
      transform: ${({ zoom }) => `scale(${zoom / 100})`};
    }
  }
`;
