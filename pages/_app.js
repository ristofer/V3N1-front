import '../styles/globals.css'
import { OpenAPIProvider } from 'react-openapi-client';

function MyApp({ Component, pageProps }) {
  return (
    <OpenAPIProvider definition="/api-docs/v1/swagger.json">
      <Component {...pageProps} />
    </OpenAPIProvider>
  )
}

export default MyApp
