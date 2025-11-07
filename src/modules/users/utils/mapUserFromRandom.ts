import type { IRandomUser } from "../types/IRandomUser";
import type { IUser } from "../types/IUser";

export const mapUserFromRandomUser = (user: IRandomUser): IUser => {
  return {
    id: user.login.uuid,
    fullName: `${user.name.first} ${user.name.last}`,
    gender: user.gender,
    email: user.email,
    picture: user.picture.medium,
    location: `${user.location.city}, ${user.location.country}`,
    latitude: +user.location.coordinates.latitude,
    longitude: +user.location.coordinates.longitude,
  }
}