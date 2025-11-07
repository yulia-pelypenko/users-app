import { api } from "@/modules/common/api/client";
import type { IRandomUserApiResponse } from "../types/IRandomUserApiResponse";
import { config } from "@/modules/common/config";
import type { IUser } from "../types/IUser";

const env = import.meta.env;
const USERS_ENDPOINTS = "/users"

export const getRandomUsers = async (
  results = config.randomUserCount
): Promise<IRandomUserApiResponse> => {
  const { data } = await api.get<IRandomUserApiResponse>(
    `${env.VITE_RANDOM_USER_API}?results=${results}`
  );

  return data;
};

export const getSavedUsers = async (): Promise<IUser[]> => {
  const { data } = await api.get<IUser[]>(USERS_ENDPOINTS);

  return data;
}

export const saveUser = async (user: IUser): Promise<IUser> => {
  const { data } = await api.post<IUser>(USERS_ENDPOINTS, user)

  return data;
}

export const removeUser = async (id: string): Promise<void> => {
  await api.delete(`${USERS_ENDPOINTS}/${id}`)
} 