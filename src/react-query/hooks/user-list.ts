import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../api/user-list";

export const useUserList = () =>
  useQuery<any>({ queryKey: ["userList"], queryFn: getUserList });
