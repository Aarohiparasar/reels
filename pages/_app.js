import "@/styles/globals.css";
import "./signup.css"
import "./login.css"
import "./feed.css"

import AuthWrapper from "../context/auth"
export default function App({ Component, pageProps }) {
  return (
    <AuthWrapper>
  <Component {...pageProps} />
  </AuthWrapper>
  )
}

