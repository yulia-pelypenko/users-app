import { MainButton } from "@/modules/common/components/MainButton";
import { useRemoveUser } from "../../hooks/useUsers";
import { Spin } from "antd";
import styles from "./styles.module.scss";

interface RemoveUserButtonProps {
  id: string;
}

export const RemoveUserButton = ({ id }: RemoveUserButtonProps) => {
  const { mutate, isPending} = useRemoveUser();

  return (
    <>
      <MainButton
        disabled={isPending}
        type="primary"
        onClick={() => mutate(id)}
        className={styles.button}
      >
        {isPending ? <Spin size="small" /> : "Delete"}
      </MainButton>
    </>
  );
};