import { Navigation } from "../styledComponents/nav";
import Container from "../styledComponents/container";

import theme from "../styledComponents/theme";
import { ThemeProvider } from "styled-components";
import Footer from "./footer";
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
