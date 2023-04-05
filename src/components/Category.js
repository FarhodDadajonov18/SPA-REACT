import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getFilterCategory } from './Api';
import Loader from './Loader';
import MealList from './MealList';

function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(()=>{
  getFilterCategory(name).then(data => setMeals(data.meals))
  },[name]);

  return (
    <div>
      {
        !meals.length ? (<Loader />) : <MealList meals={meals} />
      }
    </div>
  )
}

export default Category;