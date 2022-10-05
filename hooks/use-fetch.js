import useSWR from "swr";
import useSignOut from "../modules/authentication/hooks/use-sign-out";

const useFetch = (url) => {
  const signOut = useSignOut();

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      if (error.status === 401) {
        signOut();
      }
      throw error;
    }

    return res.json();
  };
  return useSWR(url, fetcher);
};

export default useFetch;
