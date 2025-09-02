import { useEffect, useState } from "react";
import { api_base_url } from "../helper";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
    // fetch(`${api_base_url}${url}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
