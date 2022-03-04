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
  columns: "Słupy",
  height: "Wysokość w kalenicy",
  angle: "Kąt",
};

const DetailsTable = ({ data }) => {
  return (
    <Container className="globalMargin">
      {Object.entries(data).map(([key, value]) => {
        const label = TRANSLATIONS[key];
        return (
          <Row key={key}>
            <div className="firstRow">
              <img
                width={27}
                height={27}
                src={icons[key]?.src}
                alt={"ikona dla " + TRANSLATIONS[key]}
              />
              <p className="label">{label}:</p>
            </div>
            <div className="secondRow">
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
                <span className="value">
                  {value.split("\n").map((line) => (
                    <p>{line}</p>
                  ))}
                </span>
              )}
            </div>
          </Row>
        );
      })}
    </Container>
  );
};

export default DetailsTable;
