import { useEffect } from "react";
import { useFilter } from "../context";

export const useSearch = (url, search) => {
  const { productList, initialProductList } = useFilter();

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const result = await response.json();
      const searched = result.filter((res) =>
        res.name.toLowerCase().includes(search.toLowerCase())
      );
      initialProductList(searched);
    }
    handleFetch();
  }, [search]);
  return { productList };
};
