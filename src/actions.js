import { ADD_TASK, DELETE_TASK } from "./types";

// defining action creators

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const deleteTask = (task) => ({
  type: DELETE_TASK,
  task,
});
