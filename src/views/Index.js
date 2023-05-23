import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

import Navbar from "../components/NavBar";
import Search from "../components/Search";
import CardsUsers from "../components/CardsUsers";

function Index() {
  const { enqueueSnackbar } = useSnackbar();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  function showAlert(msg, alertType) {
    enqueueSnackbar(msg, {
      variant: alertType,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  }

  const loadUsers = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setFilteredUsers(data);
          setLoading(false);
        })
        .catch((e) => {
          showAlert(
            e?.response?.data?.error ||
              e?.response?.data?.message ||
              e?.response?.data ||
              "Error en el servidor",
            "Error"
          );
        });
    }, 500);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Navbar />
      <Search
        users={users}
        showAlert={showAlert}
        setFilteredUsers={setFilteredUsers}
        setQuery={setQuery}
      />
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <Grid container spacing={10} padding={10} ml={-10}>
        {!loading && filteredUsers.length === 0 ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={1}
            p={2}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "16px" }}
            >
              {`No se encontraron resultados para "${query}"`}
            </Typography>
          </Box>
        ) : (
          filteredUsers.map((user, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardsUsers user={user} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default Index;
