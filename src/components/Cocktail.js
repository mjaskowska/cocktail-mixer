import React from 'react'
import './styles/Cocktail.css'

const Cocktail = ({item}) => {
    
    console.log(item)
    return (
        <div className="drink-card">
            {item.strDrink}
            <img className="drink-img"src={item.strDrinkThumb} alt={item.strDrink}></img>
        </div>
    )
}

export default Cocktail
