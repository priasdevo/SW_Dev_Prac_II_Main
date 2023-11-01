"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store"; // Adjust the path to your store file

type ReduxProviderProps = {
  children: React.ReactNode;
};

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  console.log("Prias fuckup");
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
