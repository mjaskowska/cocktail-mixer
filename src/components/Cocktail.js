import React from "react";
import "./styles/Cocktail.css";

const Cocktail = ({ item }) => {
  return (
    <div className="drink-card">
      <div className="card-inner">
        <div className="card-front">
          <p className="drink-title">{item.strDrink}</p>
          <img
            className="drink-img"
            src={item.strDrinkThumb}
            dataid={item.idDrink}
            alt={item.strDrink}
          ></img>
        </div>
        <div className="card-back">
          <p className="drink-title">{item.strDrink}</p>
          <ul>
            <li>
              <span className="category">Type: </span>
              {item.strAlcoholic}
            </li>
            <li>
              <span className="category">Glass: </span>
              {item.strGlass}
            </li>
            <li>
              <ul className="ingredient-list">
                <li className="ingredient">
                  <small>{item.strMeasure1}</small> {item.strIngredient1}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure2}</small> {item.strIngredient2}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure3}</small> {item.strIngredient3}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure4}</small> {item.strIngredient4}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure5}</small> {item.strIngredient5}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure6}</small> {item.strIngredient6}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure7}</small> {item.strIngredient7}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure8}</small> {item.strIngredient8}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure9}</small> {item.strIngredient9}
                </li>
                <li className="ingredient">
                  <small>{item.strMeasure10}</small> {item.strIngredient10}
                </li>
              </ul>
            </li>
            <li className="instructions">{item.strInstructions}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
