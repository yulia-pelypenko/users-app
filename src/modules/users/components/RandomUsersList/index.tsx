import { WeatherShowModalButton } from "@/modules/weather/components";
import { useRandomUsers } from "../../hooks/useRandomUsers";
import { mapUserFromRandomUser } from "../../utils/mapUserFromRandom";
import { SaveUserButton } from "../SaveUserButton";
import { UserCard } from "../UserCard";
import { MainList } from "@/modules/common/components";

export const RandomUsersList = () => {
  const { data, isFetching } = useRandomUsers();

  const users = data?.results.map(mapUserFromRandomUser) || [];

  return (
    <MainList
      data={users}
      isLoading={isFetching}
      emptyText="Users not found"
      title="Random User"
      renderItem={(user) => {
        const actions = [
          <SaveUserButton user={user} />,
          <WeatherShowModalButton
            latitude={user.latitude}
            longitude={user.longitude}
          />,
        ];
        return <UserCard user={user} actions={actions} />;
      }}
    ></MainList>
  );
};
