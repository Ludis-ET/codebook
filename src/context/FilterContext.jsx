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
      payload: {
        products: products,
      },
    });
  }
  function bestSeller(products) {
    return products.filter((product) => product.best_seller === true);
  }

  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((b, a) => Number(a.price) - Number(b.price));
    }
  }

  function rating(products){
    if(state.ratings === "4STARSABOVE"){
        return products.filter(product => product.rating >= 4);
    }
    if(state.ratings === "3STARSABOVE"){
        return products.filter(product => product.rating >= 3);
    }
    if(state.ratings === "2STARSABOVE"){
        return products.filter(product => product.rating >= 2);
    }
    if(state.ratings === "1STARSABOVE"){
        return products.filter(product => product.rating >= 1);
    }
    return products;
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
