import { connect } from "react-redux";
import { addTask } from "./actions";

const App = ({ appState, addNewTask }) => {
  const handleAddTask = () => {
    const task = document.querySelector(".task").value;
    console.log("handleAddTask here..", task);
    addNewTask(task);
  };

  return (
    <div className="container-outer">
      <h2>List Of Tasks</h2>
      <div className="tasks">
        {appState.tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </div>
      <input type="text" className="task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ appState: state });

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => {
    console.log("dispatching task...", task);
    dispatch(addTask(task));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
