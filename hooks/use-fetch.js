import useSWR from "swr";

const useFetch = (url) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return useSWR(url, fetcher);
};

export default useFetch;
