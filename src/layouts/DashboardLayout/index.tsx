import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "./DashboardHeader";

const DashBoardLayout: FC = (): JSX.Element => {
  return (
    <div className="w-full">
      <Header />
      <div className="py-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
