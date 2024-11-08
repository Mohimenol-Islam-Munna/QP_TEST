import { axiosInstance } from "../config";

export const fetchPostListHandler = async () => {
  try {
    const res = await axiosInstance({
      url: "posts",
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
