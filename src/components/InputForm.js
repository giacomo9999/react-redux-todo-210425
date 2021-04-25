import { useState } from "react";

const InputForm = (props) => {
  const [formState, setFormState] = useState({
    fruitName: "",
    fruitColor: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const submitForm = () => {
    console.log("Submitting...", formState);
    props.addFruit(formState);
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
      {/* <button onClick={this.props.cancel}>Cancel</button> */}
    </div>
  );
};

export default InputForm;
