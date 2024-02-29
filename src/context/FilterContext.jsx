import { createContext, useContext } from "react";

const FilterInitialState = {
  productList: [],
  inStock: false,
  bestSeller: false,
  sortBy: null,
  ratings: null,
};

export const FilterContext = createContext(FilterInitialState);

export const FilterProvider = ({ children }) => {
  const value = {};
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);