import { ADD_FRUIT, DELETE_FRUIT } from "../types";

const initialState = {
  fruits: [{ fruitName: "Orange", fruitColor: "chartreuse" }],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRUIT:
      return {
        ...state,
        fruits: state.fruits.concat(action.fruit),
      };
    case DELETE_FRUIT:
      const filteredFruits = state.fruits.filter((fruit) => {
        return fruit !== action.fruit;
      });
      return { fruits: filteredFruits };
    default:
      return state;
  }
};

export default appReducer;
