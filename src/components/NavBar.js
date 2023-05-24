import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img
            src="https://dataiq.com.ar/wp-content/themes/dataiq/assets/img/logo.png"
            alt="Data IQ"
            style={{
              maxWidth: "150px",
              height: "auto",
              filter: "brightness(0) invert(1)",
              paddingLeft: "12px",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              ml: 2,
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              display: { xs: "none", sm: "block" },
            }}
          >
            Technological Consulting Solutions
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
