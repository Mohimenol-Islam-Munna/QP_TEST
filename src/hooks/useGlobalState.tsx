import { useContext } from "react";
import { GlobalContext } from "../context";

const useGlobalState = () => {
  const globalState = useContext(GlobalContext);
  return globalState;
};

export default useGlobalState;
