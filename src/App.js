import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Cocktails from "./components/Cocktails";
import SearchBar from './components/SearchBar'

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('margarita')
  console.log(items)
  useEffect(() => {
    const fetchDrinks = async () => {
      const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);

      const response = result.data.drinks

      const validateInput = (response) => {
        if (response === null ) {
          const validOutput = ['margarita']
          return validOutput
        }
        else { 
          const validOutput = result.data.drinks
          return validOutput
        }
      }

      setItems(validateInput(response));
      setIsLoading(false);

    };
    fetchDrinks();
  }, [query]);

  return (
    <div className="App">
      <h1 className="main-title">Let's mix some cocktails!</h1>
      <SearchBar getQuery={(q)=>setQuery(q)} />
      <Cocktails isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
