import { axiosInstance } from "./axiosInstance";

export const getPhones = async (searchText = "") => {
  try {
    const response = await axiosInstance.get("/phones", {
      params: {
        search: searchText,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch phones", error);
    throw error;
  }
};
