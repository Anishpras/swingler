import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { SwinglerProvider } from "../context/SwinglerContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://b5fv67npunnd.usemoralis.com:2053/server"
      appId="sAmVo4RfLoEdPsLTNCeHCoyK1hMLmFNkgJ7zXuV2">
      <SwinglerProvider>
        <Component {...pageProps} />
      </SwinglerProvider>
    </MoralisProvider>
  );
}

export default MyApp;
