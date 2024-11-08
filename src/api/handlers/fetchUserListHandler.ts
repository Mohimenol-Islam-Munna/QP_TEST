import { axiosInstance } from "../config";

export const fetchUserListHandler = async () => {
  try {
    const res = await axiosInstance({
      url: "users",
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
