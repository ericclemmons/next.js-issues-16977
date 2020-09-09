import "../styles/globals.css";

import Amplify from "../fake-amplify";

Amplify.configure({ configured: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
