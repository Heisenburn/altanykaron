import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import locationIcon from "../public/images/icons/location.svg";
import Link from "next/link";
import Button from "../domains/shared/components/Button/Button";
import DESKTOP_MEDIA_QUERY from "../domains/constants/screenSize";

//moze lepiej uzyc https://react-hook-form.com/ do walidacji?
const Kontakt = () => {
  const [state, handleSubmit] = useForm("xbjwzjbj");
  if (state.succeeded) {
    return (
      <MainLayout>
        <Container>
          <p>Wiadomość została wysłana!</p>
          <Link passHref href="/">
            <a className="seeOffersButton">Wróć do głównej strony</a>
          </Link>
        </Container>
      </MainLayout>
    );
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
            <label htmlFor="name">Imię i nazwisko</label>
            <input id="name" type="text" name="name" required />

            <label htmlFor="phoneNumber">Numer telefonu</label>
            <input
              id="phoneNumber"
              type="phone"
              name="name"
              required
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />

            <label htmlFor="message">Wiadomość</label>
            <textarea id="message" name="message" required />
            <ValidationError prefix="Message" field="" errors={state.errors} />
            <Button type="submit" disabled={state.submitting}>
              {state.submitting ? "Wysyłam..." : "Wyślij"}
            </Button>
            <p>
              <span style={{ color: "red" }}>*</span> - Pole obowiązkowe
            </p>
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
          referrerPolicy="no-referrer-when-downgrade"
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
    justify-content: space-around;
    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      flex-direction: column-reverse;
    }
  }
  form {
    padding: 50px;
    width: 30%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 34px -4px rgba(0, 0, 0, 0.25);
    margin: 20px;

    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      width: 100%;
      margin: 0;
    }

    input,
    textarea {
      border: 0.5px solid rgba(0, 75, 117, 0.3);
      box-sizing: border-box;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.35));
      border-radius: 2px;
      padding: 10px 0;
    }

    label {
      display: flex;
      padding: 15px 0;
      color: ${({ theme }) => theme.blue};
      font-weight: 600;
      font-size: 14px;

      &:after {
        content: "*";
        display: block;
        color: red;
      }
    }

    button {
      margin-top: 30px;
      background: ${({ theme }) => theme.blue};
      color: white;
      height: 51px;
      width: 100%;
    }
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

    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      width: 100%;
      text-align: center;
    }
  }
`;
