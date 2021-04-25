import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addFruit, deleteFruit, updateFruit } from "./actions";

import InputForm from "./components/InputForm";

const App = () => {
  const Fruits = useSelector((state) => state.fruits, shallowEqual);
  const dispatch = useDispatch();
  const [inputFormOpen, setInputFormOpen] = useState(false);
  const [addOrEdit, setAddOrEdit] = useState("add");
  const [editData, setEditData] = useState({});
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

  const handleEditFruit = (fruit) => {
    console.log("handleEditFruit here..", fruit);
    setEditData({
      fruitId: fruit.fruitId,
      fruitName: fruit.fruitName,
      fruitColor: fruit.fruitColor,
    });
    setAddOrEdit("edit");
    toggleInputForm();
  };

  const handleUpdateFruit = (fruit) => {
    console.log("handleUpdateFruit here..", fruit);
    dispatch(updateFruit(fruit));
    setAddOrEdit("add");
    toggleInputForm();
  };

  const toggleInputForm = () => {
    setInputFormOpen(!inputFormOpen);
  };

  const configureInputForm = () => {
    let inputPanel = <button onClick={toggleInputForm}>Add A Fruit</button>;

    if (inputFormOpen && addOrEdit === "edit") {
      console.log("Configuring 'Edit' Panel...");
      inputPanel = (
        <InputForm
          addOrEdit={"edit"}
          editData={editData}
          updateFruit={handleUpdateFruit}
          toggleInputForm={toggleInputForm}
        />
      );
    }

    if (inputFormOpen && addOrEdit === "add") {
      console.log("Configuring 'Add' Panel...");
      inputPanel = (
        <InputForm
          addOrEdit={"add"}
          addFruit={handleAddFruit}
          currentFruitId={currentFruitId}
          toggleInputForm={toggleInputForm}
        />
      );
    }

    return inputPanel;
  };

  return (
    <div className="container-outer">
      <h2>List Of Fruits</h2>
      <div className="Fruits">
        <ul>
          {Fruits.map((fruit, index) => (
            <li key={index}>
              <h2>{fruit.fruitName}</h2>
              <p>ID: {fruit.fruitId}</p>
              <p>Color: {fruit.fruitColor}</p>

              <button onClick={() => handleRemoveFruit(fruit)}>Delete</button>
              <button onClick={() => handleEditFruit(fruit)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>

      {configureInputForm()}
    </div>
  );
};

export default App;
