import Link from "next/link";
import { ContactPageContainer } from "../../pages/kontakt";
import MainLayout from "../shared/components/Layouts/MainLayout";

const ThankYouFragment = () => {
  window.scrollTo({ top: 0 });
  return (
    <MainLayout>
      <ContactPageContainer
        style={{
          paddingTop: "50%",
          paddingBottom: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Wiadomość została wysłana!</p>
        <Link passHref href="/">
          <a className="seeOffersButton">Wróć do głównej strony</a>
        </Link>
      </ContactPageContainer>
    </MainLayout>
  );
};

export default ThankYouFragment;
