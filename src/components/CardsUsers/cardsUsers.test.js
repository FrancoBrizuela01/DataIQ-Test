import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardsUsers from "./CardsUsers";

describe("CardsUsers", () => {
  const user = {
    name: "Franco",
    username: "Fran",
    email: "francobrizuela@example.com",
    phone: "1234567890",
    company: {
      name: "DataIQ",
    },
    address: {
      city: "Buenos Aires",
      geo: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
  };

  test("renders user data correctly", () => {
    render(<CardsUsers user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.username)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.phone)).toBeInTheDocument();
  });

  test("opens modal when clicked", () => {
    render(<CardsUsers user={user} />);

    fireEvent.click(screen.getByText("Ver más"));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  test("closes modal when handleClose is called", () => {
    render(<CardsUsers user={user} />);

    fireEvent.click(screen.getByText("Ver más"));
    fireEvent.click(screen.getByText("Cancelar"));

    expect(screen.queryByRole("Dialog")).not.toBeInTheDocument();
  });
});
