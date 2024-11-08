import { FC } from "react";
import useGlobalState from "../../../hooks/useGlobalState";

const Profile: FC = (): JSX.Element => {
  const { globalState, globalStateHandler } = useGlobalState();

  return (
    <div>
      <h1 className="text-3xl font-bold">Profile</h1>
      <div className="mt-8">
        <form>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={globalState.name}
              onChange={(e) => {
                globalStateHandler(e.target.name, e.target.value);
              }}
              placeholder="Enter Your Name"
              className="w-1/2 border border-gray-400 px-3 py-1 rounded-md my-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={globalState.email}
              onChange={(e) => {
                globalStateHandler(e.target.name, e.target.value);
              }}
              placeholder="Enter Your Email"
              className="w-1/2 border border-gray-400 px-3 py-1 rounded-md my-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
