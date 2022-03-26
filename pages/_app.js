import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { SwinglerProvider } from "../context/SwinglerContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://buaai0nj4ttx.usemoralis.com:2053/server"
      appId="0GJxnyxLAUzUpVBOtquzyPaZHLaAQxUFw8rmaLyr">
      <SwinglerProvider>
        <Component {...pageProps} />
      </SwinglerProvider>
    </MoralisProvider>
  );
}

export default MyApp;
