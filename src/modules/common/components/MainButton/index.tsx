import type { ButtonProps } from "antd";
import { Button } from "antd";
import { type FC } from "react";

export const MainButton: FC<ButtonProps> = ({children, ...props}) => {
  return(
    <Button type="primary" {...props}>{children}</Button>
  )
}