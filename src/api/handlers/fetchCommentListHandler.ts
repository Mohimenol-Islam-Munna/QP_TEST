import { axiosInstance } from "../config";

export const fetchCommentListHandler = async () => {
  try {
    const res = await axiosInstance({
      url: "comments",
      method: "GET",
    });

    return {
      status: "success",
      data: res.data,
      error: null,
    };
  } catch (err) {
    return {
      status: "error",
      data: null,
      error: err,
    };
  }
};
