import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    handleFetch();
  }, [url]);
  return { data };
};
