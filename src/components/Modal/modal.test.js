import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  const handleClose = jest.fn();
  const user = {
    name: "Franco",
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
    render(<Modal open={true} handleClose={handleClose} user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.phone)).toBeInTheDocument();
    expect(screen.getByText(user.company.name)).toBeInTheDocument();
    expect(screen.getByText(user.address.city)).toBeInTheDocument();
  });

  test("calls handleClose when cancel button is clicked", () => {
    render(<Modal open={true} handleClose={handleClose} user={user} />);

    const cancelButton = screen.getByText("Cancelar");
    fireEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
