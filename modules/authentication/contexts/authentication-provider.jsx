import { useOperation, useOperationMethod } from "react-openapi-client";
import axios from "axios";
import { useMemo, useCallback } from "react";
import AuthenticationContext from "./authentication-context";

function AuthenticationProvider({ children }) {
  const [endSession] = useOperationMethod("endSession");
  const { loading, data, error } = useOperation("getSession");

  const signOut = useCallback(async () => {
    await endSession();
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      axios.get("/");
    }
  }, [endSession]);

  const context = useMemo(
    () => ({
      currentUser: data,
      loading,
      error,
      signOut,
    }),
    [data, error, loading, signOut]
  );

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
