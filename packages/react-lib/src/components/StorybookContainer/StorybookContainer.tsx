import React from "react";

export interface StorybookContainerProps {
  children: React.ReactNode;
}

const StorybookContainer = ({ children }: StorybookContainerProps) => (
  <div>{children}</div>
);

export default StorybookContainer;
