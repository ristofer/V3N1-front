import { useContext } from "react";

import AuthenticationContext from "../contexts/authentication-context";

const useAuthLoading = () => {
  const context = useContext(AuthenticationContext);

  return context?.loading;
};

export default useAuthLoading;
