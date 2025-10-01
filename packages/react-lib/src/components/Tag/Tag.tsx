import React from "react";
import Text from "../Text/Text";
import classes from "./tag.module.scss";

export interface TagProps {
  type?: "default" | "success" | "alert" | "error";
  text: string;
  textColor?: string;
  textFontWeight?: number;
  textFontSize?: string;
  textFontFamily?: string;
  backgroundColor?: string;
  format?: "square" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
}

export interface StyledTagProps {
  $type?: "default" | "success" | "alert" | "error";
  $textColor?: string;
  $textFontWeight?: number;
  $textFontSize?: string;
  $textFontFamily?: string;
  $backgroundColor?: string;
  $format?: "square" | "semiRounded" | "rounded";
  $borderRadius?: string;
  $size?: "small" | "medium" | "large";
  $padding?: string;
}

const Tag = ({
  text = "Tag",
  type = "default",
  textColor = "#fff",
  textFontWeight = 600,
  textFontSize,
  textFontFamily,
  backgroundColor,
  format = "semiRounded",
  borderRadius,
  size = "medium",
  padding,
}: TagProps) => {
  const fontSize = textFontSize
    ? textFontSize
    : size === "large"
      ? "18px"
      : size === "small"
        ? "14px"
        : "16px";

  return (
    <div data-testid="tag">
      <div className={classes["my-class"]} data-primary>
        Css Module Item
      </div>
      <Text
        color={textColor}
        fontWeight={textFontWeight}
        fontSize={fontSize}
        fontFamily={textFontFamily}
        onClick={(e) => console.log("Tag clicked!", e)}
      >
        {text}
      </Text>
    </div>
  );
};

export default Tag;
