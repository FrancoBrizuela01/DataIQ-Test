import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Index from "./views/Index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );
}

export default App;
