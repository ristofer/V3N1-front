import "../styles/globals.css";
import { OpenAPIProvider } from "react-openapi-client";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthenticationProvider from "../modules/authentication/contexts/authentication-provider";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <OpenAPIProvider definition="/api-docs/v1/swagger.json">
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navbar />
          <Component />
        </AuthenticationProvider>
      </ThemeProvider>
    </OpenAPIProvider>
  );
}

export default MyApp;
