import { useContext } from "react";

import AuthenticationContext from "../contexts/authentication-context";

const useCurrentUser = () => {
  const context = useContext(AuthenticationContext);

  return context?.currentUser;
};

export default useCurrentUser;
