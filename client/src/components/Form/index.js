import React, { Component, useContext } from "react";
import FormGroup from "../FormGroup";
import Context from "../Context";
let axios = require("axios");

// import

var accountForms = {
  // Login input data
  login: [
    {
      nameFor: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Email"
    },
    {
      nameFor: "password",
      type: "password",
      label: "Password",
      placeholder: "Password"
    }
  ],
  // Register input data
  register: [
    {
      nameFor: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Email"
    },
    {
      nameFor: "firstName",
      type: "text",
      label: "First Name",
      placeholder: "John"
    },
    {
      nameFor: "lastName",
      type: "text",
      label: "Last Name",
      placeholder: "Doe"
    },
    {
      nameFor: "username",
      type: "text",
      label: "Username",
      placeholder: "Username"
    },
    {
      nameFor: "password",
      type: "password",
      label: "Password",
      placeholder: "Password"
    }
  ]
};

class Form extends Component {
  // Provide state to allow form to be used for other purposes
  state = {
    formFields: accountForms.login,
    // Formdata is populated on change
    formData: {}
  };

  // Handle form change for login
  handleFormChange = e => {
    e.preventDefault();
    // Extract values from event
    var name = e.target.name;
    let value = e.target.value;
    // Copy current form data for appending
    let temporaryState = this.state.formData;

    // Create new value within temporary state and set state value
    temporaryState[name] = value;
    this.setState({
      formData: temporaryState
    });
  };

  // Handle login submission
  handleLoginSubmit = e => {
    e.preventDefault();

    console.log(this.state.formData);
    // Send login request using userFunctions
    axios.post("/login", this.state.formData).then(response => {
      console.log("Token after login", response.data.token);
      // if response was successful
      if (response.data.success) {
        console.log("successful login.  Assigning cookie");
        // Set cookies with authorization token
        this.props.cookies.set("authorization", response.data.token);
        // Toggle login
        this.context.toggleLogin();
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          {/* //   Iterate through state's formFields variable and create form fields*/}
          {this.state.formFields.map(item => {
            return (
              <FormGroup formItem={item} handleChange={this.handleFormChange} />
            );
          })}
          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleLoginSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

Form.contextType = Context;

export default Form;
