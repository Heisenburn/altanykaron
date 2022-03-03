import ListingWrapper from "./Listing.theme";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../shared/components/Button/Button";

const Listing = ({
  dataFromStaticProps,
  hashId,
  availableImagesInDirectory,
}) => {
  const dataFromStaticPropsLength = dataFromStaticProps["altanyData"].length;
  const [isListingExpanded, setListingExpanded] = useState(false);
  const numberOfElementsToRender = isListingExpanded
    ? dataFromStaticPropsLength
    : 4;

  return (
    <ListingWrapper id={hashId}>
      <div className="globalMargin">
        <ul>
          {dataFromStaticProps["altanyData"]
            .slice(0, numberOfElementsToRender)
            .map(({ name, shortDescription, price }, index) => {
              const imageSrc = name.includes("-")
                ? name.split("-").pop()
                : name.split(" ").pop();
              return (
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
                    <Link
                      passHref
                      key={name}
                      href={"oferta/" + name.toLowerCase().replace(/\s+/g, "-")}
                    >
                      <a className="priceButton">WIĘCEJ</a>
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className="triangle"></div>
        {!isListingExpanded && dataFromStaticPropsLength > 4 ? (
          <Button
            className="seeAllOffers"
            onClick={() => setListingExpanded(true)}
          >
            Zobacz pozostałe oferty
          </Button>
        ) : null}
      </div>
    </ListingWrapper>
  );
};

export default Listing;
