import { useOperation, useOperationMethod } from "react-openapi-client";
import axios from "axios";

import AuthenticationContext from "./authentication-context";

function AuthenticationProvider({ children }) {
  const [endSession] = useOperationMethod("endSession");
  const { loading, data, error } = useOperation("getSession");

  const HandleSignOut = async () => {
    await endSession();
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      axios.get("/");
    }
  };

  const context = {
    currentUser: data,
    loading,
    error,
    signOut: async () => {
      HandleSignOut();
    },
  };

  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
