import { FC } from "react";

const ErrorPage: FC = (): JSX.Element => {
  return (
    <div className="w-full max-w-screen-lg h-[100vh] mx-auto flex justify-center items-center ">
      <div className="border border-red-400 px-8 py-6  rounded-xl">
        <h2 className="text-center">Somethings went wrong.</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
