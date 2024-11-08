import { FC } from "react";
import { menuList } from "./menuList";
import { Link, useLocation } from "react-router-dom";

const Header: FC = (): JSX.Element => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-full py-4 border-b border-gray-200">
      <ul className="flex">
        {menuList.map((item) => (
          <li
            key={item.id}
            className={`mx-2 px-3 py-[2px] rounded-sm cursor-pointer ${
              pathname.split("/").length > 2
                ? `/${pathname.split("/")[1]}` === `${item.outletUrl}`
                  ? "bg-blue-500 text-white"
                  : "bg-white "
                : pathname === `${item.url}`
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
