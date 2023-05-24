import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Search = ({ users, setFilteredUsers, setQuery }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setQuery(filterValue);
    setFilter(filterValue);

    const filteredResults = users.filter(
      (user) =>
        user.name.toLowerCase().includes(filterValue) ||
        user.email.toLowerCase().includes(filterValue) ||
        user.address.city.toLowerCase().includes(filterValue)
    );
    setFilteredUsers(filteredResults);
  };

  const handleClear = () => {
    setQuery("");
    setFilter("");
    setFilteredUsers(users);
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" mt={9}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <TextField
            label="Buscar"
            value={filter}
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {filter && (
                    <IconButton edge="end" onClick={handleClear}>
                      <ClearIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
