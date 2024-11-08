import { FC } from "react";

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <div className="w-full max-w-screen-lg h-[100vh] mx-auto flex justify-center items-center ">
      <div className="border border-red-400 px-8 py-6  rounded-xl">
        <h2 className="text-center">Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
