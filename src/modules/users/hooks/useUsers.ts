import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { IUser } from "../types/IUser";
import { getSavedUsers, removeUser, saveUser } from "../services/users.service";
import { message } from "antd";
import { config } from "@/modules/common/config";

export const useSavedUsers = () =>
  useQuery<IUser[]>({
    queryKey: ["saved-users"],
    queryFn: getSavedUsers,
    staleTime: config.users.savedUsersStaleTime,
  });

export const useSaveUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: IUser) => saveUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["saved-users"] });
      message.success("User saved successfully");
    },

    onError: () => {
      message.error("Failed to save user")
    }
  });
};

export const useRemoveUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => removeUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["saved-users"] });
      message.success("User deleted successfully");
    },

    onError: () => {
      message.error("Failed to delete user")
    }
  });
};
