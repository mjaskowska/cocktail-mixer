import React from "react";
import Cocktail from './Cocktail'
import LoadingIcon from "./LoadingIcon";

const Cocktails = ({ isLoading, items }) => {
  return isLoading ? (
    <LoadingIcon />
  ) : (
      <section>
          {items.map((item)=>{
              return <Cocktail key={item.idDrink} item={item} />
          })}
      </section>
   
  );
};
export default Cocktails;
