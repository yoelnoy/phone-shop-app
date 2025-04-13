import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { Phone } from "../types/phone";

export const useGetPhoneDetails = () => {
  const { id } = useParams<{ id: string }>();

  return useQuery({
    queryKey: ["phone", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Phone>(`/products/${id}`);
      return data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    throwOnError: true,
  });
};
