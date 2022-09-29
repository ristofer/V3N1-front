import "../styles/globals.css";
import { OpenAPIProvider } from "react-openapi-client";

function MyApp({ Component }) {
  return (
    <OpenAPIProvider definition="/api-docs/v1/swagger.json">
      <Component />
    </OpenAPIProvider>
  );
}

export default MyApp;
