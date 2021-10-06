const initialState = {
  meal: {
    recipeName: "",
    recipeImg: "",
    recipeInst: "",
  },
  isFetching: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;