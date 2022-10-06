import { useOperationMethod } from "react-openapi-client";
import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import AuthenticationContext from "./authentication-context";
import useFetch from "../../../hooks/use-fetch";

function AuthenticationProvider({ children }) {
  const [endSession] = useOperationMethod("endSession");
  const router = useRouter();

  const { data, error } = useFetch("/api/current_session");

  const signOut = useCallback(async () => {
    if (error === undefined) {
      await endSession();
    }
    if (router.pathname !== "/landing") {
      await router.push("/landing");
    }
    window.location.reload();
  }, [endSession, error, router]);

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
