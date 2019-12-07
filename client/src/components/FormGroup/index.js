// import dependencies
import React from "react";

// props.formItem should be {
// nameFor: Name to be submitted in API call
// label: What the user sees above input submission
// type: Datatype to expect ie) email, password, text
// placeholder: Current placeholder value
// }
// You will also require the onChange handler mapped to props.handleChange

// Functional component
function FormGroup(props) {
  return (
    <div className="form-group">
      {/* Label */}
      <label htmlFor={props.formItem.nameFor}>{props.formItem.label}</label>
      {/* Input */}
      <input
        onChange={props.handleChange}
        type={props.formItem.type}
        name={props.formItem.nameFor}
        required
        className="form-control"
        placeholder={props.formItem.placeholder}
      />
    </div>
  );
}

export default FormGroup;
