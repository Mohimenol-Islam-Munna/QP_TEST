import { FC } from "react";

type Props = {
  title: string;
  type?: "submit" | "button";
};

const Button: FC<Props> = ({ title, type = "button" }) => {
  return (
    <div>
      <button
        type={type}
        className={`mr-4 px-3 py-[2px] bg-gray-200 text-black
           cursor-not-allowed px-[10px]; rounded-[5px]`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
