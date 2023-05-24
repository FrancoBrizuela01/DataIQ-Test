import React from "react";
import { render, screen } from "@testing-library/react";
import Maps from "./Maps";

describe("Maps", () => {
  test("renders Google Maps iframe with correct source URL", () => {
    const latitud = 40.7128;
    const longitud = -74.006;

    render(<Maps latitud={latitud} longitud={longitud} />);

    const iframeElement = screen.getByTitle("Mapa");
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      "src",
      `https://www.google.com/maps?q=${latitud},${longitud}&z=15&output=embed`
    );
  });
});
