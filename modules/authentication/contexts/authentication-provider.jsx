import { useOperationMethod } from "react-openapi-client";
import { useMemo, useCallback } from "react";
import Router from "next/router";
import AuthenticationContext from "./authentication-context";
import useFetch from "../../../hooks/use-fetch";

function AuthenticationProvider({ children }) {
  const [endSession] = useOperationMethod("endSession");

  const { data, error } = useFetch("/api/current_session");

  const signOut = useCallback(async () => {
    await endSession();
    await Router.push("/landing/");
    window.location.reload();
  }, [endSession]);

  const context = useMemo(
    () => ({
      currentUser: data,
      error,
      signOut,
    }),
    [data, error, signOut]
  );

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
