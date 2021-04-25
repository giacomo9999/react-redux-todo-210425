import { ADD_FRUIT, DELETE_FRUIT, UPDATE_FRUIT } from "./types";

// defining action creators

export const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  fruit,
});

export const deleteFruit = (fruitId) => ({
  type: DELETE_FRUIT,
  fruitId,
});

export const updateFruit = (fruit) => ({
  type: UPDATE_FRUIT,
  fruit,
});
