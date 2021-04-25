import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addTask } from "./actions";

const App = () => {
  const tasks = useSelector((state) => state.tasks, shallowEqual);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const task = document.querySelector(".task").value;
    console.log("handleAddTask here..", task);
    dispatch(addTask(task));
  };

  const removeTask = (index) => {
    console.log("Deleting...", index);
  };

  return (
    <div className="container-outer">
      <h2>List Of Tasks</h2>
      <div className="tasks">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <p>{task}</p>
              <button onClick={() => removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <input type="text" className="task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default App;
