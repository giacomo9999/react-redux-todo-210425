import { ADD_FRUIT, DELETE_FRUIT } from "./types";

// defining action creators

export const addFruit = (task) => ({
  type: ADD_FRUIT,
  task,
});

export const deleteFruit = (task) => ({
  type: DELETE_FRUIT,
  task,
});
