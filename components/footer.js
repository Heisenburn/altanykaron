import Container from "../styledComponents/container";
import theme from "../styledComponents/theme";
import styled, { ThemeProvider } from "styled-components";
import Image from "next/image";
import TwoColumnsLayout from "../styledComponents/TwoColumnsLayout";
export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <Container>
          <footer>
            <TwoColumnsLayout className="footerColumns">
              <div className="column">
                <div className="logo">
                  <Image
                    quality={1}
                    src="/images/logo-white.svg"
                    width={210}
                    height={26}
                    layout="responsive"
                    alt="Your Name"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Vitae
                  proin in volutpat pellentesque cum convallis molestie
                  porttitor. Orci, enim leo in a non nisi. Tortor, viverra sit
                  viverra non habitant imperdiet felis, augue. Aliquam
                  celerisque ac nunc, dolor sit diam nisl, vulputate senectus.
                </p>
                <div className="icons">
                  <div className="icon">
                    <Image
                      quality={1}
                      src="/images/icons/certificate.svg"
                      width={43}
                      height={43}
                      layout="responsive"
                      alt="Your Name"
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <h3>Kontakt</h3>
              </div>
            </TwoColumnsLayout>
          </footer>
        </Container>
      </FooterContainer>
    </ThemeProvider>
  );
}

const FooterContainer = styled.div`
  background: linear-gradient(180deg, #00598b -11.08%, #00273d 66%);
  min-height: 500px;

  footer {
    padding-top: 55px;
  }
  .logo {
    width: 210px !important;
    height: 26px !important;
  }
`;
