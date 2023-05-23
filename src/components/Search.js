import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const Search = ({ users, setFilteredUsers, setQuery }) => {
  const [filtro, setFiltro] = useState("");

  const handleChange = (event) => {
    const valorFiltro = event.target.value.toLowerCase();
    setQuery(valorFiltro);
    setFiltro(valorFiltro);

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
        <Grid item sx={{ width: 300, mb: 5 }}>
          <TextField
            label="Buscar"
            value={filtro}
            onChange={handleChange}
            fullWidth
            margin="normal"
            color="success"
            // focused
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
