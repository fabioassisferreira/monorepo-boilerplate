import React from "react";

export interface TextProps {
  children: React.ReactNode;
  color?: string;
  weight?: "normal" | "bold";
  fontWeight?: number;
  fontSize?: string;
  fontFamily?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface StyledTextProps {
  $color?: string;
  $weight?: "normal" | "bold";
  $fontWeight?: number;
  $fontSize?: string;
  $fontFamily?: string;
}

const Text = ({
  children,
  color = "#000",
  weight = "normal",
  fontWeight,
  fontSize = "16px",
  fontFamily,
  onClick
}: TextProps) => (
  <div onClick={onClick} style={{ color, fontWeight: fontWeight ?? (weight === "bold" ? 700 : 400), fontSize, fontFamily }}>
    {children}
  </div>
);

export default Text;
