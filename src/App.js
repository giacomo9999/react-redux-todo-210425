import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addTask } from "./actions";

const App = () => {
  const tasks = useSelector((state) => state.tasks, shallowEqual);
  console.log("Tasks: ", tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const task = document.querySelector(".task").value;
    console.log("handleAddTask here..", task);
    dispatch(addTask(task));
  };

  return (
    <div className="container-outer">
      <h2>List Of Tasks</h2>
      <div className="tasks">
        {tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </div>
      <input type="text" className="task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default App;
