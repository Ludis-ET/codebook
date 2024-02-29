import { useState, useEffect } from "react";
import { useFilter } from "../context";

export const useFetch = (url) => {
  const { productList, initialProductList } = useFilter();

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch(url);
      const result = await response.json();
      initialProductList(result);
      console.log(productList)
    }
    handleFetch();
  }, [url]);
  return { productList };
};
