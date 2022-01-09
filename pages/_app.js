import "../globalStyles/globalStyles.css";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
