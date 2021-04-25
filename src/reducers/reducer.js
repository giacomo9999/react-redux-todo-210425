const initialState = { tasks: [] };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("Reducer adding task...");
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
      };
    default:
      return state;
  }
};

export default appReducer;
