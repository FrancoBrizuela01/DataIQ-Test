import { useSnackbar } from "notistack";
import Navbar from "../components/NavBar";
import Search from "../components/Search";
import Users from "../components/CardsUsers";
import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

function Index() {
  const { enqueueSnackbar } = useSnackbar();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
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
      <Grid container spacing={8} padding={8}>
        {filteredUsers.length === 0 ? (
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
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Users user={user} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}

export default Index;
