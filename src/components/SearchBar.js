import React, { useState } from "react";

const SearchBar = ({getQuery}) => {
  const [searchInput, setSearchInput] = useState("");

  
  const handleChange =  (q) => {
      setSearchInput(q)
      getQuery(q)

  }
  return (
    <section>
      <form>
        <input
          type="text"
          className="search-input"
          placeholder="Search cocktail ex. margarita"
          value={searchInput}
          onChange={(e)=> handleChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;
