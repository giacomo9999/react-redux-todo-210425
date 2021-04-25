import { ADD_TASK, DELETE_TASK } from "../types";

const initialState = { tasks: [] };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log("Reducer adding task...");
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
      };
    case DELETE_TASK:
      console.log("Reducer deleting task...", action.task);
      const filteredTasks = state.tasks.filter((task) => {
        return task !== action.task;
      });
      return { tasks: filteredTasks };
    default:
      return state;
  }
};

export default appReducer;
