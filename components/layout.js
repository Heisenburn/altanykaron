import { Navigation } from "../styledComponents/nav";
import Container from "../styledComponents/container";

import theme from "../styledComponents/theme";
import { ThemeProvider } from "styled-components";
export default function Layout({ children, home }) {
  return (
    <ThemeProvider theme={theme}>
      {!home ? (
        <Navigation>
          <Container>nawigacja ogolna</Container>
        </Navigation>
      ) : null}
      {children}
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </ThemeProvider>
  );
}
