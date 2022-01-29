import ListingWrapper from "./Listing.theme";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
const Listing = ({ dataFromStaticProps, id }) => {
  const dataFromStaticPropsLength = dataFromStaticProps["altanyData"].length;
  const [isListingExpanded, setListingExpanded] = useState(false);
  const numberOfElementsToRender = isListingExpanded
    ? dataFromStaticPropsLength
    : 5;

  return (
    <ListingWrapper id={id}>
      <div className="globalMargin">
        {/* TODO! tu problemy w konsoli zobacz */}
        <ul>
          {dataFromStaticProps["altanyData"]
            .slice(0, numberOfElementsToRender)
            .map(({ name, ID, shortDescription, price }) => {
              return (
                <li key={ID}>
                  <div className="imageWrapper">
                    <Image
                      quality={1}
                      src={`/images/offers/${ID}/mainPhoto.jpeg`}
                      width={307}
                      height={270}
                      layout="responsive"
                      alt={`zdjecie oferty: ${name}`}
                    />
                  </div>
                  <div className="listingItem-data">
                    <h3 key={name}>{name}</h3>
                    <p>{shortDescription}</p>
                    <p>
                      <strong>{price} zł</strong>
                    </p>
                    {/* tu sie upewnic czy link taki sam serwer i klient */}

                    <Link
                      passHref
                      key={ID}
                      href={`oferta/altana-ogrodowa?id=${ID}`}
                    >
                      <a className="priceButton">WIĘCEJ</a>
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className="triangle"></div>
        {!isListingExpanded ? (
          <Button
            className="seeAllOffers"
            onClick={() => setListingExpanded(true)}
          >
            {"Zobacz pozostałe oferty"}
          </Button>
        ) : null}
      </div>
    </ListingWrapper>
  );
};

export default Listing;
