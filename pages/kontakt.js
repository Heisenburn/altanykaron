import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import locationIcon from "../public/images/icons/location.svg";

const Kontakt = () => {
  const [state, handleSubmit] = useForm("xbjwzjbj");
  if (state.succeeded) {
    return <p>Wiadomość została wysłana!</p>;
  }
  return (
    <MainLayout>
      <Container>
        <div className="heading">
          <h1>Skontaktuj się z nami</h1>
          <p>Odpowiadamy w ciągu 24H</p>
        </div>
        <div className="address-and-contactForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Wiadomość</label>
            <textarea id="message" name="message" required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Wyślij
            </button>
          </form>
          <div className="address">
            <Image src={locationIcon} width={85} height={75} />

            <p>Znajdujemy się w:</p>
            <p>Stary Broniszew 42-231</p>
            <p>ul. Tartakowa 10 Województwo Śląskie</p>
            <p>
              Jeśli interesuje Cię konkretna oferta wpisz ją w
              <b> tytule wiadomości</b>. Np ‘kontakt w sprawie Altanki A1’
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277552.7381593683!2d16.70488414052378!3d51.28867184884486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b1b73e1ef905%3A0xc6b8818942153c30!2sAltany%20Karo%C5%84!5e0!3m2!1spl!2spl!4v1649505902215!5m2!1spl!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </MainLayout>
  );
};

export default Kontakt;

const Container = styled.main`
  padding-top: 150px;

  .address-and-contactForm {
    display: flex;
    justify-content: space-between;
  }

  form {
    padding: 50px;
    width: 30%;
    display: flex;
    flex-direction: column;
  }

  .heading {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .address {
    width: 30%;
    & > span {
      filter: invert(45%) sepia(93%) saturate(1242%) hue-rotate(191deg)
        brightness(89%) contrast(99%);
    }
  }
`;
