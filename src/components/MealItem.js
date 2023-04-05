import React from 'react'
import { Link } from 'react-router-dom';


function MealItem({strMeal, strMealThumb, idMeal}) {

  return (
    <div className='mealItemSize'>
          <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
          <h5 className="card-title"><b>{strMeal.slice(0,15)}..</b></h5>
        </div>
        <div className="card-action">
          <Link to={`/meal/${idMeal}`} className='btn'>Watch recipe</Link>
        </div>
      </div>
    </div>
  )
}

export default MealItem;