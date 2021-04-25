import { ADD_TASK } from "./types";

// defining action creators

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});
