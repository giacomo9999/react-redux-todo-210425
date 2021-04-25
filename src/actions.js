import { ADD_FRUIT, DELETE_FRUIT } from "./types";

// defining action creators

export const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  fruit,
});

export const deleteFruit = (fruit) => ({
  type: DELETE_FRUIT,
  fruit,
});
