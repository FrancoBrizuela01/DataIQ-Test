import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00D979",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00574A",
      contrastText: "#fff",
    },
    info: {
      main: "#ff7e67",
      contrastText: "#fff",
    },
  },
  spacing: 4,
});

export default theme;
