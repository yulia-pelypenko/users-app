import { useQuery } from "@tanstack/react-query";
import { getRandomUsers } from "../services/users.service";
import { config } from "@/modules/common/config";

export function useRandomUsers(results?: number) {
  return useQuery({
    queryKey: ['randomUsers', results],
    queryFn: () => getRandomUsers(results),
    staleTime: config.users.randomUsersStaleTime,
  });
}