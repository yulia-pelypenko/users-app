import type { IRandomUser } from "./IRandomUser";

export interface IRandomUserApiResponse {
  results: IRandomUser[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}