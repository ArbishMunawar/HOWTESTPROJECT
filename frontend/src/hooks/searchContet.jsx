import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery,input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
