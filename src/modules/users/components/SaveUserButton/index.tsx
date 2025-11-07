import { MainButton } from "@/modules/common/components/MainButton";
import type { IUser } from "../../types/IUser";
import { useSavedUsers, useSaveUser } from "../../hooks/useUsers";
import { Spin } from "antd";
import styles from "./styles.module.scss";

interface SaveUserButtonProps {
  user: IUser;
}

export const SaveUserButton = ({ user }: SaveUserButtonProps) => {
  const { data: savedUsers = [] } = useSavedUsers();
  const { mutate, isPending } = useSaveUser();

  const isUserSaved = savedUsers.some((saveUser) => saveUser.id === user.id);

  return (
    <MainButton
      disabled={isUserSaved || isPending}
      type="primary"
      onClick={() => mutate(user)}
      className={styles.button}
    >
      {isPending ? <Spin size="small" /> : "Save"}
    </MainButton>
  );
};
