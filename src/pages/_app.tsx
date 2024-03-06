import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrelineScript from "@/components/PrelineScript";
import "@/styles/footer/style.css";
import Providers from "@/util/Providers";
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ToastContainer />
      <Component {...pageProps} />
      <PrelineScript />
    </Providers>
  );
}
