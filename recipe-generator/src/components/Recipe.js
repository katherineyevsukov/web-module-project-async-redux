import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMeal } from './../actions'

const Recipe = (props) => {
  const { recipeName, recipeImg, recipeInst } = props.meal;

  useEffect(() => {
    props.getMeal()
  }, []) 

  return (
    <div>
      <h2>{recipeName}</h2>
      <img width="400px" src={recipeImg}></img>
      <p>{recipeInst}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { meal: state.meal };
};

export default connect(mapStateToProps, { getMeal })(Recipe);
