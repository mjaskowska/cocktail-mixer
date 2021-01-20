import React, {useEffect} from 'react'
import {API_URL} from '../assets/API'

const CocktailList = () => {
    
    useEffect(()=>{
        fetch(API_URL)
        .then((res)=> res.json())
        .then(data => console.log(data))
      }, [])

    return (
        <div>
            <p></p>
        </div>
    )
}

export default CocktailList
