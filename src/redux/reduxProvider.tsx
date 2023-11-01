"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Adjust the path to your store file
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

type ReduxProviderProps = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  let reduxPersistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={reduxPersistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
