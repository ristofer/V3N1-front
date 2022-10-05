import "../styles/globals.css";
import { OpenAPIProvider } from "react-openapi-client";
import AuthenticationProvider from "../modules/authentication/contexts/authentication-provider";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component }) {
  return (
    <OpenAPIProvider definition="/api-docs/v1/swagger.json">
      <AuthenticationProvider>
        <Navbar />
        <Component />
      </AuthenticationProvider>
    </OpenAPIProvider>
  );
}

export default MyApp;
