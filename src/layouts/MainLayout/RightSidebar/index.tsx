import { FC } from "react";
import useGlobalState from "../../../hooks/useGlobalState";
import { Link } from "react-router-dom";

const RightSideBard: FC = (): JSX.Element => {
  const { globalState } = useGlobalState();

  return (
    <div className="break-words">
      <div className="text-lg font-semibold">
        <Link to={"user"}>
          <h2 className="text-right cursor-pointer">{globalState.name}</h2>
        </Link>
      </div>
      <p className="text-md text-right break-words">{globalState.email}</p>
    </div>
  );
};

export default RightSideBard;
