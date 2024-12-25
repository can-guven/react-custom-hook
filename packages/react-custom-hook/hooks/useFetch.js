import { useEffect, useState } from "react";

export const useFetch = (fetcher) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);

    fetcher()
      .then((result) => {
        setData(result);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [fetcher]);

  return {
    loading,
    error,
    data,
  };
};
