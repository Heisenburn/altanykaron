import { Navigation } from "../Navigation/Navigation";
import theme from "../../globalStyles/theme";
import { ThemeProvider } from "styled-components";
import Footer from "../Footer/Footer";

export default function MainLayout({ children, isHome }) {
  return (
    <ThemeProvider theme={theme}>
      {!isHome ? <Navigation isHome={false} /> : null}
      {children}
      <Footer />
    </ThemeProvider>
  );
}
