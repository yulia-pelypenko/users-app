import { WeatherShowModalButton } from "@/modules/weather/components/WeatherShowModalButton";
import { UserCard } from "../UserCard";
import { MainList } from "@/modules/common/components";
import { useSavedUsers } from "../../hooks/useUsers";
import { RemoveUserButton } from "../RemoveUserButton";

export const SavedUsersList = () => {
  const { data: users = [], isFetching } = useSavedUsers();

  return (
    <MainList
      data={users}
      isLoading={isFetching}
      emptyText="Users not found"
      title="Saved User"
      renderItem={(user) => {
        const actions = [
          <RemoveUserButton id={user.id} />,
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
