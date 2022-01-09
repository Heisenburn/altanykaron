const Listing = ({ dataFromStaticProps }) => {
  return (
    <Container>
      {/* TODO! tu problemy w konsoli zobacz */}
      <ul>
        {dataFromStaticProps["altanyData"]
          .slice(0, numberOfElementsToRender)
          .map(
            ({
              name,
              ID,
              shortDescription,
              price,
              url,
              offerImageDirectory,
            }) => {
              return (
                <li key={ID}>
                  <div className="imageWrapper">
                    <Image
                      quality={1}
                      src={`${offerImageDirectory}${ID}/mainPhoto.jpeg`}
                      width={307}
                      height={270}
                      // placeholder="blur"
                      layout="responsive"
                      alt={`zdjecie oferty: ${name}`}
                    />
                  </div>
                  <div className="listingItem-data">
                    <h3 key={name}>{name} - </h3>
                    <p>{shortDescription}</p>
                    <p>
                      <strong>{price} zł</strong>
                    </p>
                    {/* tu sie upewnic czy link taki sam serwer i klient */}

                    <Button className="priceButton">
                      <Link
                        key={url + name}
                        href={
                          "oferty/" + name.toLowerCase().replace(/\s+/g, "-")
                        }
                      >
                        WIĘCEJ
                      </Link>
                    </Button>
                  </div>
                </li>
              );
            }
          )}
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
    </Container>
  );
};
