import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addFruit, deleteFruit } from "./actions";

import InputForm from "./components/InputForm";

const App = () => {
  const Fruits = useSelector((state) => state.fruits, shallowEqual);
  const dispatch = useDispatch();
  const [inputFormOpen, setInputFormOpen] = useState(false);
  const [currentFruitId, setCurrentFruitId] = useState(1);

  const handleAddFruit = (fruit) => {
    console.log("handleAddFruit here..", fruit);
    dispatch(addFruit(fruit));
    toggleInputForm();
    setCurrentFruitId(currentFruitId + 1);
  };

  const handleRemoveFruit = (index) => {
    console.log("Deleting...", index);
    dispatch(deleteFruit(index));
  };

  const handleUpdateFruit = () => {};

  const toggleInputForm = () => {
    setInputFormOpen(!inputFormOpen);
  };

  return (
    <div className="container-outer">
      <h2>List Of Fruits</h2>
      <div className="Fruits">
        <ul>
          {Fruits.map((fruit, index) => (
            <li key={index}>
              <h2>{fruit.fruitName}</h2>
              <p>{fruit.fruitId}</p>
              <p>Color: {fruit.fruitColor}</p>

              <button onClick={() => handleRemoveFruit(fruit)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {inputFormOpen ? (
        <InputForm addFruit={handleAddFruit} currentFruitId={currentFruitId} />
      ) : (
        <button onClick={toggleInputForm}>Add A Fruit</button>
      )}
    </div>
  );
};

export default App;
