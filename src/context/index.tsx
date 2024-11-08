import { createContext } from "react";

export const GlobalContext = createContext<{ [key: string]: any }>({});

export const GlobalContextProvider = GlobalContext.Provider;
