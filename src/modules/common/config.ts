export const config = {
  randomUserCount: 50,
  errorDefaultMessage: "Something went wrong",

  weather: {
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  },

  users: {
    randomUsersStaleTime: 1000 * 60 * 5,
    savedUsersStaleTime: 1000 * 60 * 5,
  }
}