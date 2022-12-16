import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col space-y-8 min-h-screen w-full items-center justify-start p-8">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
