import { Navigation } from "./nav";
import Container from "./container";
export default function Layout({ children, home }) {
  return (
    <div>
      {home ? (
        <Navigation>
          <Container> nawigacja home </Container>
        </Navigation>
      ) : (
        <Navigation>
          <Container>nawigacja ogolna</Container>
        </Navigation>
      )}
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
    </div>
  );
}
