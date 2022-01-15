import theme from "../../globalStyles/theme";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import TwoColumnsLayout from "../Layouts/TwoColumnsLayout";
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
                      alt="Your Name"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, onsectetur adipiscing elit.
                    Vitae proin in volutpat pellentesque cum convallis molestie
                    porttitor. Orci, enim leo in a non nisi. Tortor, viverra sit
                    viverra non habitant imperdiet felis, augue. Aliquam
                    celerisque ac nunc, dolor sit diam nisl, vulputate senectus.
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
                      alt="Your Name"
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
                      alt="Your Name"
                    />
                    <p>twojmail@gmail.com</p>
                  </div>
                  <div className="iconWrapper">
                    <Image
                      src="/images/icons/phone-call.svg"
                      width={20}
                      height={20}
                      alt="Your Name"
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
                  alt="Your Name"
                />
                <p>Wieloletnie doświadczenie</p>
              </div>
              <div className="icon">
                <Image
                  src="/images/icons/complex.svg"
                  width={43}
                  height={43}
                  alt="Your Name"
                />
                <p>Kompleksowe rozwiązania</p>
              </div>
              <div className="icon">
                <Image
                  src="/images/icons/quality.svg"
                  width={43}
                  height={43}
                  alt="Your Name"
                />
                <p>Wysoka jakość</p>
              </div>
            </div>
          </div>
          <div className="globalMargin">
            <p id="copyright">
              Copyright © 2021 altanykaron.pl. All rights reserved.
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
    background-color: #004b753d;
    display: flex;
    justify-content: center;
    padding: 30px 0;

    & > div {
      align-items: center;
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media screen and (max-width: 1023px) {
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
      @media screen and (max-width: 1023px) {
        padding: 10px 0;
      }
    }
  }

  #copyright {
    text-align: center;
    margin: 40px 0 0;
  }
`;
