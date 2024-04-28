import { useQuery } from "@tanstack/react-query";
import { getUserLikeList } from "../api/user-like-list";

export const useUserLikeList = () =>
  useQuery<any>({ queryKey: ["userLikeList"], queryFn: getUserLikeList });
