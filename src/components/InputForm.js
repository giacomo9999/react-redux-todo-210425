import { useState } from "react";

const InputForm = (props) => {
  const [formState, setFormState] = useState({});

  const handleChange = () => {};

  const submitForm = () => {
    console.log("Submitting...");
  };

  return (
    <div className="container-inner">
      <form className="h-form">
        <label className="h-label">
          Name
          <input
            className="h-input"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label className="h-label">
          Color
          <input
            className="h-input"
            type="text"
            name="color"
            value={formState.color}
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
