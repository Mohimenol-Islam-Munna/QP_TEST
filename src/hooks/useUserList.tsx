import { useEffect, useState } from "react";
import { fetchUserListHandler } from "../api/handlers/fetchUserListHandler";

export type UserListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const useUserList = () => {
  const [userList, setUserList] = useState<UserListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setUserList((prev) => {
        return { ...prev, isLoading: true };
      });

      const res = await fetchUserListHandler();

      setUserList((prev) => {
        return { ...prev, isLoading: false, data: res.data, error: res.error };
      });
    };

    fetchData();
  }, []);

  return { userList };
};

export default useUserList;
