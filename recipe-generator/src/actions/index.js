import axios from 'axios';

export const FETCH_START = "FETCH_START"

export const getMeal = () => dispatch => {
    dispatch(fetchStart());
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
        console.log(res.data.meals[0])
    })
}

export const fetchStart = () => {
    return ({type: FETCH_START})
}