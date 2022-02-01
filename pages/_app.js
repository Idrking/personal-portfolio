//font imports
import "@fontsource/josefin-sans/400.css";
import "@fontsource/bungee-shade/400.css";

import "../styles/globals.css";
import "../styles/tokens.css";

import BorderWrapper from "../components/single/BorderWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <BorderWrapper>
      <Component {...pageProps} />
    </BorderWrapper>
  );
}

export default MyApp;
