import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders logo and title correctly", () => {
    render(<NavBar />);

    const logoElement = screen.getByAltText("Data IQ");
    const titleElement = screen.getByText("Technological Consulting Solutions");

    expect(logoElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
