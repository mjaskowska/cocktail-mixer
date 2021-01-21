import React from 'react'
import './styles/Cocktail.css'

const Cocktail = ({item}) => {

   

    return (
        <div className="drink-card" >
            <p className="drink-title">{item.strDrink}</p>
            <img className="drink-img"src={item.strDrinkThumb} dataid={item.idDrink} alt={item.strDrink}></img>
        </div>
    )
}

export default Cocktail
