import { useState, useEffect } from "react";

export const useFetch = (url,search="") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(search ? url : `${url}?q=${search}`);
      const result = await response.json();
      setData(result);
    }
    handleFetch();
  }, [url]);
  return { data };
};
