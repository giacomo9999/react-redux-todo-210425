import { ADD_FRUIT, DELETE_FRUIT, UPDATE_FRUIT } from "../types";

const initialState = {
  fruits: [{ fruitId: 0, fruitName: "Orange", fruitColor: "chartreuse" }],
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
        return fruit.fruitId !== action.fruitId;
      });
      return { fruits: filteredFruits };
    case UPDATE_FRUIT:
      const updatedFruits = state.fruits.map((fruit) => {
        if (fruit.fruitId === action.fruit.fruitId) return action.fruit;
        return fruit;
      });
      return { fruits: updatedFruits };
    default:
      return state;
  }
};

export default appReducer;
