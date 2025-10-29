"use client"

import React, { ReactNode } from "react";
import { persistStore } from "redux-persist";
import store from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
  
};
