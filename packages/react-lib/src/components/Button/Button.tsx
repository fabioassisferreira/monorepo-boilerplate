import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  some?: string;
}

const Button = ({ some }: ButtonProps) => (
  <div className={styles.container}>Button oh {some} </div>
);

export default Button;
