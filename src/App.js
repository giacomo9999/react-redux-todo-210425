import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addFruit, deleteFruit } from "./actions";

import InputForm from "./components/InputForm";

const App = () => {
  const Fruits = useSelector((state) => state.fruits, shallowEqual);
  const dispatch = useDispatch();

  const handleAddFruit = (fruit) => {
    console.log("handleAddFruit here..", fruit);
    dispatch(addFruit(fruit));
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
              <h2>{fruit.fruitName}</h2>
              <p>Color: {fruit.fruitColor}</p>

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
