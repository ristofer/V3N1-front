import { useContext } from "react";

import AuthenticationContext from "../contexts/authentication-context";

const useSignOut = () => {
  const context = useContext(AuthenticationContext);

  return context?.signOut;
};

export default useSignOut;
