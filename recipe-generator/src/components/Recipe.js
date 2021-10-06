import React from 'react';
import { connect } from 'react-redux';

const Recipe = (props) => {
const { recipeName, recipeImg, recipeInst } = props.meal

    return (
        <div>
    <h2>{recipeName}</h2>
    <img width="400px" src={recipeImg}></img>
    <p>{recipeInst}</p>
    </div>
    )
}
const mapStateToProps = (state) => {
   return {meal: state.meal}
}

export default connect(mapStateToProps)(Recipe)