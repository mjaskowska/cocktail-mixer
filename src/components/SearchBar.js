import React, { useState } from "react";
import './styles/SearchBar.css'

const SearchBar = ({getQuery}) => {
  const [searchInput, setSearchInput] = useState("");

  
  const handleChange =  (q) => {
      setSearchInput(q)
      getQuery(q)

  }
  return (
    <section className="search-container">
      <form>
        <input
          type="text"
          className="search-input"
          placeholder="Search cocktail"
          value={searchInput}
          onChange={(e)=> handleChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchBar;
