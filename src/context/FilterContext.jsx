import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer";

const FilterInitialState = {
  productList: [],
  inStock: false,
  bestSeller: false,
  sortBy: null,
  ratings: null,
};

export const FilterContext = createContext(FilterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, FilterInitialState);
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payloads:{
        products:producs
      }
    });
  }
  const value = {
    productList: state.productList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
