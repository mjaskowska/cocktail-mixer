import React from "react";
import Cocktail from './Cocktail'
import LoadingIcon from "./LoadingIcon";
import './styles/Cocktails.css'

const Cocktails = ({ isLoading, items }) => {

const handleClick = () => {
    console.log('clicked')
}

  return isLoading ? (
    <LoadingIcon />
  ) : (
      <section className="cocktail-container">
          {items.map((item)=>{
              return <Cocktail key={item.idDrink} item={item}/>
          })}
      </section>
   
  );
};
export default Cocktails;
