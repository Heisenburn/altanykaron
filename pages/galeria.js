import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import Gallery from "react-photo-gallery";

const baseDir = `/images/offers`;

export async function getStaticProps() {
  const fs = require("fs");
  const availableDirectories = fs.readdirSync(`./public/${baseDir}`);
  availableDirectories.shift(); //remove .DS_Store dir

  const availableImagesInDirectory = availableDirectories.map((dir) => {
    const availablePhotos = fs.readdirSync(`./public/${baseDir}/${dir}`);
    return availablePhotos.map((item) => `${dir}/${item}`);
  });

  return {
    props: {
      availableImagesInDirectory,
    }, // will be passed to the page component as props
  };
}

const Galeria = ({ availableImagesInDirectory }) => {
  const photos = availableImagesInDirectory.map((item) => {
    return item.map((availableImg) => {
      return {
        src: `${baseDir}/${availableImg}`,
        width: 1,
        height: 1,
      };
    });
  });

  photos.forEach((item) => {
    return photos.concat(item);
  });

  console.log(photos);
  return (
    <MainLayout>
      <Gallery photos={photos} />
    </MainLayout>
  );
};

export default Galeria;
