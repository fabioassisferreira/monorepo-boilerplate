import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";

import Tag from "./Tag";

describe("<Tag />", () => {
  it("should render component with default properties", () => {
    render(<Tag text="Tag" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with success type", () => {
    render(<Tag text="Tag" type="success" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with alert type", () => {
    render(<Tag text="Tag" type="alert" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with error type", () => {
    render(<Tag text="Tag" type="error" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom background color", () => {
    render(<Tag text="Tag" backgroundColor="#fff" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with semi rounded format", () => {
    render(<Tag text="Tag" format="semiRounded" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with rounded format", () => {
    render(<Tag text="Tag" format="rounded" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom border radius", () => {
    render(<Tag text="Tag" borderRadius="20px" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with medium size", () => {
    render(<Tag text="Tag" size="medium" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with large size", () => {
    render(<Tag text="Tag" size="large" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom size", () => {
    render(<Tag text="Tag" padding="20px 10px" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom text color", () => {
    render(<Tag text="Tag" textColor="#000" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom text font weight", () => {
    render(<Tag text="Tag" textFontWeight={200} />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom text font size", () => {
    render(<Tag text="Tag" textFontSize="30px" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });

  it("should render component with custom text font family", () => {
    render(<Tag text="Tag" textFontFamily="Times New Roman" />);
    const element = screen.getByTestId("tag");
    expect(element).toBeInTheDocument();
    expect(within(element).getByText("Tag")).toBeInTheDocument();
  });
});
