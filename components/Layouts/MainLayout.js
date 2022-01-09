import { Navigation } from "../Navigation/Navigation";
import Container from "../";
import styled from "styled-components";
import theme from "../styledComponents/theme";
import { ThemeProvider } from "styled-components";
import Footer from "./Footer/footer";
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

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
