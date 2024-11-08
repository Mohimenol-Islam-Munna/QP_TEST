import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import "./App.css";
import { GlobalContextProvider } from "./context";
import useGlobalContext from "./hooks/useGlobalContext";

const App: FC = (): JSX.Element => {
  const globalContext = useGlobalContext();

  return (
    <GlobalContextProvider value={globalContext}>
      <RouterProvider router={router} />;
    </GlobalContextProvider>
  );
};

export default App;
