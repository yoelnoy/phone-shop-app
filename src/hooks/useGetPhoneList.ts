import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/axiosInstance";
import { Phone } from "../types/phone";

export const useGetPhoneList = (search: string) => {
  return useQuery<Phone[]>({
    queryKey: ["phones", search],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Phone[]>("/products", {
        params: { search, limit: 20 },
      });
      return data;
    },
    staleTime: 5 * 60 * 1000,
    throwOnError: true,
    placeholderData: keepPreviousData,
  });
};
