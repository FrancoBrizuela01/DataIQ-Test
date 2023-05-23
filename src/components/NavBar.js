import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h5"
          noWrap
          sx={{
            ml: { xs: 2, sm: 10 },
            display: { xs: "none", sm: "flex" },
            flexGrow: 1,
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          DataIQ Test
        </Typography>
        <Typography
          variant="h6"
          noWrap
          sx={{
            ml: { xs: 2, sm: 0 },
            display: { xs: "flex", sm: "none" },
            flexGrow: 1,
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          DataIQ Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
