import { FC } from "react";
import { dashboardMenuList } from "./dashboardMenuList";
import { Link, useLocation } from "react-router-dom";

const DashboardHeader: FC = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <div className="w-full py-4">
      <ul className="flex">
        {dashboardMenuList.map((item) => (
          <li
            key={item.id}
            className={`mx-2 px-3 py-[2px] rounded-sm cursor-pointer ${
              pathname.split("/")[2] === `${item.url}`
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardHeader;
