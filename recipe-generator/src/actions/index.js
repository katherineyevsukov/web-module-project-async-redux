import axios from 'axios';

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const getMeal = () => dispatch => {
    dispatch(fetchStart());
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
        dispatch(fetchSuccess(res.data.meals[0]))
    })
}

export const fetchStart = () => {
    return ({type: FETCH_START})
}

export const fetchSuccess = ({ strMeal, strMealThumb, strInstructions})  => {
    return({type: FETCH_SUCCESS, payload: {recipeName: strMeal , recipeImg: strMealThumb, recipeInst: strInstructions} })
}