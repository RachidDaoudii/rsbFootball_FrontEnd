"use Client";

import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store.js"
export default function Providers({ children }: { children: ReactNode }) {

  return (
    <Provider store={store}>
      {children}
      
    </Provider>
  );
}
