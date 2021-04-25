import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addFruit, deleteFruit } from "./actions";

import InputForm from "./components/InputForm";

const App = () => {
  const Fruits = useSelector((state) => state.fruits, shallowEqual);
  const dispatch = useDispatch();

  const handleAddFruit = () => {
    // const Fruit = document.querySelector(".Fruit").value;
    console.log("handleAddFruit here..");
    // dispatch(addFruit(Fruit));
  };

  const removeFruit = (index) => {
    console.log("Deleting...", index);
    dispatch(deleteFruit(index));
  };

  return (
    <div className="container-outer">
      <h2>List Of Fruits</h2>
      <div className="Fruits">
        <ul>
          {Fruits.map((fruit, index) => (
            <li key={index}>
              <p>{fruit}</p>
              <button onClick={() => removeFruit(fruit)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {/* <input type="text" className="Fruit" />
      <button onClick={handleAddFruit}>Add Fruit</button> */}
      <InputForm addFruit={handleAddFruit} />
    </div>
  );
};

export default App;
