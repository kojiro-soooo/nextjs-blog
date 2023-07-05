// all other compoents are wrapped inside this file for managing state and global css
// global css can only be applied from this page, so it MUST be imported here

import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
