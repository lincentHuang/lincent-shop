"use client";

import React, { ReactNode } from "react";
import { persistStore } from "redux-persist";
import store from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ServerSideDataProvider } from "./serverSideData";
import { countryProps } from "@/types/layout";
import { SessionProvider } from "next-auth/react";

const persistor = persistStore(store);
type ProvidersProps = {
  children: ReactNode;
  country?: countryProps;
};
export const Providers = ({ children, country }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
          <ServerSideDataProvider country={country} />
          {children}
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
};
