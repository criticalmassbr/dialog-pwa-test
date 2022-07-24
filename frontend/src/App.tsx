import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Outlet } from "react-router-dom";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Outlet />
  </ThemeProvider>
);

export default App;
