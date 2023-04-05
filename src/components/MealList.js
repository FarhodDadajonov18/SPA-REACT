import React from 'react'
import MealItem from './MealItem';

function MealList({meals=[]}) {
  return (
    <div className='container meal-list'>
      {
        meals.map(meal =>(
          <MealItem key={meal.idMeal} {...meal} />
        ))
      }
    </div>
  )
}

export default MealList;