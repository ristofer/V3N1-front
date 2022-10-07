import { useOperationMethod } from "react-openapi-client";
import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import AuthenticationContext from "./authentication-context";
import useFetch from "../../../hooks/use-fetch";

function AuthenticationProvider({ children }) {
  const [endSession] = useOperationMethod("endSession");
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, error } = useFetch("/api/current_session");

  const signOut = useCallback(async () => {
    if (error === undefined) {
      await endSession();
    }
    if (router.pathname !== "/") {
      await router.push("/");
    }
    mutate("/api/current_session");
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
