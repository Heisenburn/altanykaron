import styled from "styled-components";
import Image from "next/image";

export default function CustomImage(
  { width, height, src, wrapperClassName },
  ...props
) {
  return (
    <ImageWrapper className={wrapperClassName} width={width} height={height}>
      <Image
        quality={1}
        src={src}
        width={width ? width : "100%"}
        height={height ? height : "100%"}
        alt="Your Name"
        {...props}
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
