import { useEffect, useState } from "react";
import { fetchPostListHandler } from "../api/handlers/fetchPostListHandler";
import { fetchCommentListHandler } from "../api/handlers/fetchCommentListHandler";

export type CommentListType = {
  isLoading: boolean;
  data: any;
  error: any;
};

const useCommentList = () => {
  const [commentList, setCommentList] = useState<CommentListType>({
    isLoading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setCommentList((prev) => {
        return { ...prev, isLoading: true };
      });

      const res = await fetchCommentListHandler();

      setCommentList((prev) => {
        return { ...prev, isLoading: false, data: res.data, error: res.error };
      });
    };

    fetchData();
  }, []);



  return { commentList };
};

export default useCommentList;
