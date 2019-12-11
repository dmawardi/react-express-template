import React, { Component } from "react";
import FormGroup from "../FormGroup";
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
  state = {
    formFields: accountForms.login,
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

    // Create new value within temporary state and set
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
      if (response.data.success) {
        console.log("successful login.  Assigning cookie");
        this.props.cookies.set("authorization", response.data.token);
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          {/* //   Iterate through state's formFields variable */}
          {this.state.formFields.map(item => {
            return (
              <FormGroup formItem={item} handleChange={this.handleFormChange} />
            );
          })}
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

export default Form;
