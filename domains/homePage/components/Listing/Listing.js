import ListingWrapper from "./Listing.theme";
import Image from "next/image";
import Link from "next/link";

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const Listing = ({
  dataFromStaticProps,
  hashId,
  availableImagesInDirectory,
}) => {
  return (
    <ListingWrapper id={hashId}>
      <div className="globalMargin">
        <ul>
          {dataFromStaticProps["altanyData"].map(
            ({ name, shortDescription, price }, index) => {
              const imageSrc = name.includes("-")
                ? name.split("-").pop()
                : name.split(" ").pop();
              return (
                <Link
                  passHref
                  key={name}
                  href={"oferta/" + name.toLowerCase().replace(/\s+/g, "-")}
                >
                  <li key={name}>
                    <div className="image-container">
                      <Image
                        src={`/images/offers/${imageSrc.toUpperCase()}/${
                          availableImagesInDirectory[index][0]
                        }`}
                        width={307}
                        height={270}
                        layout="responsive"
                        objectFit="cover"
                        alt={`zdjecie oferty: ${name}`}
                        placeholder="blur"
                        blurDataURL={rgbDataURL(165, 165, 165)}
                        quality={10}
                      />
                    </div>
                    <div className="listingItem-data">
                      <h3 key={name}>{name}</h3>
                      <p>{shortDescription}</p>
                      <p>
                        <strong>{price} zł</strong>
                      </p>

                      <a className="priceButton">WIĘCEJ</a>
                    </div>
                  </li>
                </Link>
              );
            }
          )}
        </ul>
        <div className="triangle"></div>
      </div>
    </ListingWrapper>
  );
};

export default Listing;
