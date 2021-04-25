import { useState } from "react";

const InputForm = (props) => {
  const [formState, setFormState] = useState(
    props.editData
      ? {
          fruitId: props.editData.fruitId,
          fruitName: props.editData.fruitName,
          fruitColor: props.editData.fruitColor,
        }
      : {
          fruitName: "",
          fruitColor: "",
        }
  );

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    let adjFruitId = props.editData
      ? props.editData.fruitId
      : props.currentFruitId;
    const adjFruit = { ...formState, fruitId: adjFruitId };
    if (props.addOrEdit === "add") props.addFruit(adjFruit);
    if (props.addOrEdit === "edit") props.updateFruit(adjFruit);

    setFormState({
      fruitName: "",
      fruitColor: "",
    });
  };

  return (
    <div className="container-inner">
      <form className="h-form">
        <label className="h-label">
          Name
          <input
            className="h-input"
            type="text"
            name="fruitName"
            value={formState.fruitName}
            onChange={handleChange}
          />
        </label>
        <label className="h-label">
          Color
          <input
            className="h-input"
            type="text"
            name="fruitColor"
            value={formState.fruitColor}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={submitForm}>Submit</button>
      <button onClick={props.toggleInputForm}>Cancel</button>
    </div>
  );
};

export default InputForm;
