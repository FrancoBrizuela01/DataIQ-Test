import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const Search = ({ users, setFilteredUsers, setQuery }) => {
  const [filter, setFilter] = useState("");

  const handleChange = (event) => {
    const valorFiltro = event.target.value.toLowerCase();
    setQuery(valorFiltro);
    setFilter(valorFiltro);

    const resultadosFiltrados = users.filter(
      (usuario) =>
        usuario.name.toLowerCase().includes(valorFiltro) ||
        usuario.email.toLowerCase().includes(valorFiltro) ||
        usuario.address.city.toLowerCase().includes(valorFiltro)
    );
    setFilteredUsers(resultadosFiltrados);
  };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <TextField
            label="Buscar"
            value={filter}
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="primary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
