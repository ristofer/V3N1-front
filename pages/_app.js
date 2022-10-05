import "../styles/globals.css";
import { OpenAPIProvider } from "react-openapi-client";
import AuthenticationProvider from "../modules/authentication/contexts/authentication-provider";

function MyApp({ Component }) {
  return (
    <OpenAPIProvider definition="/api-docs/v1/swagger.json">
      <AuthenticationProvider>
        <Component />
      </AuthenticationProvider>
    </OpenAPIProvider>
  );
}

export default MyApp;
