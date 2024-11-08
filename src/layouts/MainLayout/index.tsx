import { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import RightSideBard from "./RightSidebar";

const MainLayout: FC = (): JSX.Element => {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Header />
      <div className="grid grid-cols-4 py-3">
        <div className="col-span-3">
          <Outlet />
        </div>
        <div className="col-span-1">
          <RightSideBard />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
