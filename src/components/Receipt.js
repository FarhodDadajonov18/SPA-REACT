import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from './Api';
import Loader from './Loader';

function Receipt() {
    const [recipe, setRecipe] = useState([]);
    const [show, setShow] = useState(false);
    const {id} = useParams();

    const showTable = () =>{
      setShow(!show)
    };

    useEffect(() => {
      getMealById(id).then(data => setRecipe(data.meals[0]))
    },[]);

  return (
    <div>
       {
        !recipe.idMeal ? (<Loader />)
                       : (
                        <div className='recipe-header'>
                          <div className='recipe'>
                            <img className='img' src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <h5 style={{color:'orange'}}>{recipe.strMeal}</h5>
                            <h6><span style={{color:'red', fontWeight:'bold'}}> Category :</span> {recipe.strCategory}</h6>
                            {recipe.strArea ? <h6><span style={{color:'red', fontWeight:'bold'}}>Area :</span> {recipe.strArea}</h6> : null }
                          <button className='btn show-button' onClick={showTable}>Table-List</button>

                           {
                            show &&  <table className='centered'>
                            <thead>
                              <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                              </tr>
                            </thead>
                            <tbody>
                            {
                               Object.keys(recipe).map(key =>{
                                if(key.includes('Ingredient') && recipe[key]){
                                  return(
                                    <tr>
                                      <td>{recipe[key]}</td>
                                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                  )
                                }
                              }                              
                                )
                            }
                           
                            </tbody>
                          </table>
                           }
                            { recipe.strArea ? 
                                               <h6><span style={{color:'red', fontWeight:'bold'}}> Country :</span> {recipe.strArea}</h6>
                                             : null
                             }
                            <p>{recipe.strInstructions}</p>
                            <h5 className='watch-tag'>Watch Youtube Receipt</h5>


                             {
                              recipe.strYoutube ? 
                                                <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title="id"></iframe>
                                                : null
                             }
                          </div>
                        </div>
                        )
       }
    </div>
  )
}

export default Receipt;