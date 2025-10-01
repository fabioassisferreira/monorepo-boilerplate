import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("<Button />", () => {
  it("should render component with default properties", () => {
    render(<Button some="Tag" />);
    const element = screen.getByText("Button Tag");
    expect(element).toBeInTheDocument();
  });
});
