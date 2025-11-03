import type { ButtonProps } from "antd";
import { Button } from "antd";
import { type FC } from "react";
import styles from './styles.module.scss'

export const MainButton: FC<ButtonProps> = ({children, ...props}) => {
  return(
    <Button className={styles.button} type="primary" {...props}>{children}</Button>
  )
}