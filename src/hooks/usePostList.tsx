import { useEffect, useState } from "react";
import { fetchPostListHandler } from "../api/handlers/fetchPostListHandler";

export type PostListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const usePostList = () => {
  const [postList, setPostList] = useState<PostListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setPostList((prev) => {
        return { ...prev, isLoading: true };
      });

      const res = await fetchPostListHandler();

      setPostList((prev) => {
        return { ...prev, isLoading: false, data: res.data, error: res.error };
      });
    };

    fetchData();
  }, []);

  return { postList };
};

export default usePostList;
