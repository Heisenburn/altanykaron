import theme from "../../../../globalStyles/theme";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import TwoColumnsLayout from "../../../homePage/components/Layouts/TwoColumnsLayout";
import DESKTOP_MEDIA_QUERY from "../../../constants/screenSize";
export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <footer>
          <div className="globalMargin">
            <TwoColumnsLayout className="footerColumns">
              <div className="column">
                <div id="companyInfo">
                  <div className="logo">
                    <Image
                      src="/images/logo-footer.svg"
                      width={210}
                      height={26}
                      layout="responsive"
                    />
                  </div>
                  <p>
                    Nasza Firma zajmuje się produkcją altan wiat domków
                    narzędziowych oraz mebli ogrodowych. Jeśli masz swój projekt
                    lub pomysł na niestandardowe wykonanie altany to dobrze
                    trafiłeś po przesłaniu na szkicu zajmiemy się resztą.
                  </p>
                </div>
              </div>
              <div className="column">
                <div id="contactFooter">
                  <h3>Kontakt</h3>
                  <div className="iconWrapper">
                    <Image
                      src="/images/icons/location.svg"
                      width={20}
                      height={20}
                    />
                    <p>
                      <strong>Stary Broniszew</strong> ul. Tartakowa 10
                    </p>
                  </div>
                  <div className="iconWrapper">
                    <Image
                      src="/images/icons/mail.svg"
                      width={20}
                      height={20}
                    />
                    <p>tartak.broniszew@onet.pl</p>
                  </div>
                  <div className="iconWrapper">
                    <Image
                      src="/images/icons/phone-call.svg"
                      width={20}
                      height={20}
                    />
                    <p id="phoneNumber">+48 530 534 659</p>
                  </div>
                </div>
              </div>
            </TwoColumnsLayout>
          </div>
          <div className="icons">
            <div className="globalMargin">
              <div className="icon">
                <Image
                  src="/images/icons/certificate.svg"
                  width={43}
                  height={43}
                />
                <p>Wieloletnie doświadczenie</p>
              </div>
              <div className="icon">
                <Image src="/images/icons/complex.svg" width={43} height={43} />
                <p>Kompleksowe rozwiązania</p>
              </div>
              <div className="icon">
                <Image src="/images/icons/quality.svg" width={43} height={43} />
                <p>Wysoka jakość</p>
              </div>
            </div>
          </div>
          <div className="globalMargin">
            <p id="copyright">
              Copyright © 2022 altanykaron.pl. All rights reserved.
            </p>
          </div>
        </footer>
      </FooterContainer>
    </ThemeProvider>
  );
}

const FooterContainer = styled.div`
  background: linear-gradient(180deg, #00598b -11.08%, #00273d 66%);

  color: white;

  footer {
    padding-top: 55px;
  }
  .logo {
    width: 210px !important;
    height: 26px !important;
  }

  #contactFooter {
    p {
      margin: 0;
      font-size: 16px;
    }
    #phoneNumber {
      color: #ffc800;
    }
    .iconWrapper {
      display: flex;
      align-items: center;
      padding: 10px 0;
      p {
        margin-left: 10px;
      }
    }
  }

  .icons {
    margin-top: 50px;
    background-color: #004b750d;
    display: flex;
    justify-content: center;
    padding: 30px 0;

    & > div {
      align-items: center;
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
        flex-direction: column;
      }
    }

    .icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-basis: 92px;
      p {
        text-transform: uppercase;
        font-size: 10px;
      }
      @media screen and (max-width: ${DESKTOP_MEDIA_QUERY}) {
        padding: 10px 0;
      }
    }
  }

  #copyright {
    text-align: center;
    margin: 40px 0 0;
  }
`;
