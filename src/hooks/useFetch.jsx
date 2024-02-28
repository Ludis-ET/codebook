import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const result = response.json();
      setData(result);
    }
    handleFetch();
  }, [url]);
  return { data };
};
