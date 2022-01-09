import { Navigation } from "../Navigation/Navigation";
import Container from "../../globalStyles/globalContainer.theme";
import theme from "../../globalStyles/theme";
import { ThemeProvider } from "styled-components";
import Footer from "../Footer/Footer";
export default function Layout({ children, home }) {
  return (
    <ThemeProvider theme={theme}>
      {!home ? (
        <Navigation>
          <Container>nawigacja ogolna</Container>
        </Navigation>
      ) : null}
      {children}
      <Footer />
    </ThemeProvider>
  );
}

