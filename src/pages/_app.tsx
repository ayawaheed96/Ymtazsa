import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "../../Components/MainHeader/MainHeader";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={`w-full mx-auto flex min-h-screen flex-col bg-[#F9F9F9]`}>
    <div className={`w-11/12 mx-auto flex flex-col items-center gap-8`}>
    <MainHeader/>
    <Component {...pageProps} />
    </div>
  </div>)
}
