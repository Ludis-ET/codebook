import { useState, useEffect } from "react";

export const useSearch = (url, search) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const result = await response.json();
      const searched = result.filter((res) =>
        res.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(searched);
    }
    handleFetch();
  }, [search]);
  return { data };
};
