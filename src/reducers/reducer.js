import { ADD_FRUIT, DELETE_FRUIT } from "../types";

const initialState = { fruits: [] };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRUIT:
      console.log("Reducer adding fruit...");
      return {
        ...state,
        fruits: state.fruits.concat(action.fruit),
      };
    case DELETE_FRUIT:
      console.log("Reducer deleting fruit...", action.fruit);
      const filteredFruits = state.fruits.filter((fruit) => {
        return fruit !== action.fruit;
      });
      return { fruits: filteredFruits };
    default:
      return state;
  }
};

export default appReducer;
