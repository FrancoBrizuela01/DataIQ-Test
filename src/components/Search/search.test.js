import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search", () => {
  test("updates filtered users and query correctly", () => {
    const users = [
      {
        name: "Franco Brizuela",
        email: "francobrizuela@example.com",
        address: { city: "Buenos Aires" },
      },
      {
        name: "Juan Gabriel Rios",
        email: "juanrios@example.com",
        address: { city: "Mendoza" },
      },
      {
        name: "Lautaro Martinez",
        email: "lautaromartinez@example.com",
        address: { city: "Cordoba" },
      },
    ];

    const setFilteredUsers = jest.fn();
    const setQuery = jest.fn();

    render(
      <Search
        users={users}
        setFilteredUsers={setFilteredUsers}
        setQuery={setQuery}
      />
    );

    const searchInput = screen.getByLabelText("Buscar");

    fireEvent.change(searchInput, { target: { value: "Franco" } });

    expect(setQuery).toHaveBeenCalledWith("franco");
    expect(setFilteredUsers).toHaveBeenCalledWith([
      {
        name: "Franco Brizuela",
        email: "francobrizuela@example.com",
        address: { city: "Buenos Aires" },
      },
    ]);

    fireEvent.change(searchInput, { target: { value: "Mendoza" } });

    expect(setQuery).toHaveBeenCalledWith("mendoza");
    expect(setFilteredUsers).toHaveBeenCalledWith([
      {
        name: "Juan Gabriel Rios",
        email: "juanrios@example.com",
        address: { city: "Mendoza" },
      },
    ]);

    fireEvent.change(searchInput, { target: { value: "" } });

    expect(setQuery).toHaveBeenCalledWith("");
    expect(setFilteredUsers).toHaveBeenCalledWith(users);
  });

  test("clears filter and query when clear button is clicked", () => {
    const users = [
      {
        name: "Franco Brizuela",
        email: "francobrizuela@example.com",
        address: { city: "Buenos Aires" },
      },
    ];

    const setFilteredUsers = jest.fn();
    const setQuery = jest.fn();

    render(
      <Search
        users={users}
        setFilteredUsers={setFilteredUsers}
        setQuery={setQuery}
      />
    );

    const searchInput = screen.getByLabelText("Buscar");

    fireEvent.change(searchInput, { target: { value: "Franco" } });
    const clearButton = screen.getByRole("button");
    fireEvent.click(clearButton);

    expect(setQuery).toHaveBeenCalledWith("");
    expect(setFilteredUsers).toHaveBeenCalledWith(users);
  });
});
