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
          <Row isAdditionalInfo={key === "additionalInfo"}>
            <img
              width={27}
              height={27}
              src={icons[key]?.src}
              alt={"ikona dla " + TRANSLATIONS[key]}
            />
            <p>
              {TRANSLATIONS[key]}: <span>{value}</span>
            </p>
            {key === "availableColors" || key === "slateType" ? (
              <img
                src={
                  key === "availableColors"
                    ? availableColorsImage.src
                    : slateTypeImage.src
                }
                width={530}
                height={440}
                style={{ marginLeft: 50 }}
              />
            ) : null}
          </Row>
        );
      })}
    </Container>
  );
};

export default DetailsTable;
