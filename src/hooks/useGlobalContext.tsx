import React from "react";

const useGlobalContext = () => {
  const [globalState, setGlobalState] = React.useState({
    name: "Munna",
    email: "munna.cse.pust@gmail.com",
  });

  const globalStateHandler = (key: string, value: any) => {
    setGlobalState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return {
    globalState,
    globalStateHandler,
  };
};

export default useGlobalContext;
