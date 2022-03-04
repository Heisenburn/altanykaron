import ListingWrapper from "./Listing.theme";
import Image from "next/image";
import Link from "next/link";

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
                        src={`/images/offers/${imageSrc}/${availableImagesInDirectory[index][0]}`}
                        width={307}
                        height={270}
                        layout="responsive"
                        objectFit="cover"
                        alt={`zdjecie oferty: ${name}`}
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
