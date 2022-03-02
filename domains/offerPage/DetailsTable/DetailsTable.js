import { icons } from "./icons";
import { Container, Row } from "./DetailsTable.theme";
import availableColorsImage from "../../../public/images/availableColors.jpeg";
import slateTypeImage from "../../../public/images/slateType.jpeg";

export const TRANSLATIONS = {
  dimensions: "Wymiary",
  additionalInfo: "Dodatkowe informacje",
  availableColors: "Dostępne kolory",
  woodFinishing: "Impregnacja",
  slateType: "Typ dachówki",
  height: "Wysokość",
  angle: "Kąt",
};

const DetailsTable = ({ data }) => {
  return (
    <Container className="globalMargin">
      {Object.entries(data).map(([key, value]) => {
        return (
          <Row>
            <img
              width={27}
              height={27}
              src={icons[key]?.src}
              alt={"ikona dla " + TRANSLATIONS[key]}
            />
            <div> {TRANSLATIONS[key]}:</div>

            {key === "availableColors" || key === "slateType" ? (
              <img
                src={
                  key === "availableColors"
                    ? availableColorsImage.src
                    : slateTypeImage.src
                }
                className="detailsImage"
              />
            ) : (
              <p>{value}</p>
            )}
          </Row>
        );
      })}
    </Container>
  );
};

export default DetailsTable;
