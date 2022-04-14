import MainLayout from "../domains/shared/components/Layouts/MainLayout";
import styled from "styled-components";
import { useForm } from "@formspree/react";
import Image from "next/image";
import locationIcon from "../public/images/icons/location.svg";
import Button from "../domains/shared/components/Button/Button";
import DESKTOP_MEDIA_QUERY from "../domains/constants/screenSize";
import NameField from "../domains/contactPage/NameField";
import Formsy from "formsy-react";
import ThankYouFragment from "../domains/contactPage/ThankYouFragment";
import { useState } from "react";
import PhoneField from "../domains/contactPage/PhoneField";
import MessageField from "../domains/contactPage/MessageField";
import Script from "next/script";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const Kontakt = () => {
  const [state, handleSubmit] = useForm("xbjwzjbj");
  const [shouldDisplayErrors, setShouldDisplayErrors] = useState(false);

  if (state.succeeded) {
    return <ThankYouFragment />;
  }

  const handleFormSubmit = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then(async (token) => {
          /* send data to the server */

          const body = {
            recaptchaResponse: token,
          };

          try {
            const response = await fetch("/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json;chaset=utf-8" },
              body: JSON.stringify(body),
            });
            if (response.ok) {
              handleSubmit();
            } else {
              throw new Error(response.statusText);
            }
          } catch (error) {
            console.log({ message: error.message });
          }

          /* End of the sending data */
        })
        .catch((error) => {
          console.log({ message: error.message });
        });
    });
  };

  return (
    <MainLayout>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />

      <ContactPageContainer
        className="globalMargin"
        shouldDisplayErrors={shouldDisplayErrors}
      >
        <div className="heading">
          <h1>Skontaktuj się z nami</h1>
          <p>Odpowiadamy w ciągu 24H</p>
        </div>
        <div className="address-and-contactForm">
          <Formsy onValidSubmit={handleFormSubmit}>
            <NameField
              name="name"
              validations="isWords"
              validationError="Wpisz prawidłowo imię i nazwisko"
              required
              shouldDisplayErrors={shouldDisplayErrors}
            />

            <PhoneField
              name="phone"
              validations={{
                matchRegexp: /[0-9]{3}[0-9]{3}[0-9]{3}/,
              }}
              validationError="Wprowadź prawidłowy numer (bez +48)"
              required
              shouldDisplayErrors={shouldDisplayErrors}
            />
            <MessageField
              name="message"
              validations="minLength:5"
              validationError="Wprowadź minimum 5 znaków"
              required
              shouldDisplayErrors={shouldDisplayErrors}
            />

            <Button
              onClick={() => {
                setShouldDisplayErrors(true);
              }}
              type="submit"
            >
              {state.submitting ? "Wysyłam..." : "Wyślij"}
            </Button>
            <p>
              <span style={{ color: "red" }}>*</span> - Pole obowiązkowe
            </p>
          </Formsy>
          <div className="address">
            <div className="address-and-icon">
              <Image src={locationIcon} width={85} height={75} />
              <p>
                <b>Stary Broniszew 42-231</b>
                <br />
                ul. Tartakowa 10
                <br />
                Województwo Śląskie
              </p>
            </div>
            <p>
              Jeśli interesuje Cię konkretna oferta wpisz ją w
              <b> tytule wiadomości</b>. Np ‘kontakt w sprawie Altanki A1’.
            </p>
          </div>
        </div>
      </ContactPageContainer>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277552.7381593683!2d16.70488414052378!3d51.28867184884486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b1b73e1ef905%3A0xc6b8818942153c30!2sAltany%20Karo%C5%84!5e0!3m2!1spl!2spl!4v1649505902215!5m2!1spl!2spl"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MainLayout>
  );
};

export default Kontakt;

export const ContactPageContainer = styled.main`
  padding-top: 150px;

  .address-and-contactForm {
    margin: 50px 0;
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

    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      width: 100%;
      margin: 0;
      padding: 10px;
    }

    input,
    textarea {
      border: 0.5px solid rgba(0, 75, 117, 0.3);
      box-sizing: border-box;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.35));
      border-radius: 2px;
      padding: 10px 0;
      font-size: 18px;
      width: 100%;
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

      &:hover {
        transform: scale(1.02);
        cursor: pointer;
        border: 1px solid gold;
      }
    }
  }

  .heading {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .address {
    width: 30%;
    &-and-icon {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;

      @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
        flex-direction: column;
      }

      & > span {
        filter: invert(20%);
      }
    }

    @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
      width: 100%;
      text-align: center;
    }
  }
`;
