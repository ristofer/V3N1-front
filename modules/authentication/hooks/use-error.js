import { useContext } from "react";

import AuthenticationContext from "../contexts/authentication-context";

const useAuthError = () => {
  const context = useContext(AuthenticationContext);

  return context?.error;
};

export default useAuthError;
