import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import Image from "next/image";
import styled from "styled-components";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getBlurDataUrl } from "../domains/shared/Helper/getBlurDataUrl";
import { GallerySliderVisibilityContext } from "../context/GallerySliderVisibility";
import { useContext } from "react";

const baseDir = `/images/offers`;

export async function getStaticProps() {
  const fs = require("fs");
  const availableDirectories = fs.readdirSync(`./public/${baseDir}`);
  availableDirectories.shift(); //remove .DS_Store dir

  const availableImagesInDirectory = availableDirectories.map((dir) => {
    const availablePhotos = fs.readdirSync(`./public/${baseDir}/${dir}`);
    return availablePhotos.map((item) => `${dir}/${item}`);
  });

  const photos = availableImagesInDirectory.map((item) => {
    return item.map((availableImg) => `${baseDir}/${availableImg}`);
  });

  const listOfSrc = [].concat.apply([], photos);

  return {
    props: {
      listOfSrc,
    }, // will be passed to the page component as props
  };
}

const Galeria = ({ listOfSrc }) => {
  const { updateSliderVisibility } = useContext(GallerySliderVisibilityContext);

  const handleImageClick = () => {
    updateSliderVisibility((prevState) => !prevState);
    console.log("changed visibility");
  };

  return (
    <MainLayout>
      <PhotoProvider onVisibleChange={handleImageClick}>
        <Container>
          {listOfSrc.map((item, index) => {
            return (
              <PhotoView src={item} key={index}>
                <Image
                  src={item}
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL={getBlurDataUrl(165, 165, 165)}
                  quality={30}
                />
              </PhotoView>
            );
          })}
        </Container>
      </PhotoProvider>
    </MainLayout>
  );
};

export default Galeria;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 100px 0;

  img {
    padding: 10px !important;
    object-fit: cover;
  }
`;
