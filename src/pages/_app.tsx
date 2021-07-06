import type { AppProps } from "next/app";
import { LoginUserProvider } from "../data/LoginUserContext";
import "../gp/styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <LoginUserProvider>
      <Component {...pageProps} />
    </LoginUserProvider>
  );
}
