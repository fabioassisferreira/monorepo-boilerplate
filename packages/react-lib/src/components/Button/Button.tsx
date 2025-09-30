import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {}

const Button = ({}: ButtonProps) => (
  <div className={styles.container}>Button</div>
);

export default Button;
