import React from "react";
import Cocktail from "./Cocktail";
import LoadingIcon from "./LoadingIcon";
import "./styles/Cocktails.css";

const Cocktails = ({ isLoading, items }) => {
  return isLoading ? (
    <LoadingIcon />
  ) : (
    <section className="cocktail-container">
      {items.map((item) => {
        return <Cocktail key={item.idDrink} item={item} id={item.idDrink} />;
      })}
    </section>
  );
};
export default Cocktails;
