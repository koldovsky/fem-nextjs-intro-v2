import { FC } from "react";
import styles from "./button.module.css";

type Button = {
  variant: string;
};
//or const  Button: FC<Button> = ({ variant }) => {
const Button = ({ variant }: Button) => {
  return <div className={styles["button"]}>click {variant}</div>;
};

export default Button;
