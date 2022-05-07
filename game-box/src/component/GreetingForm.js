import React, { Component } from "react";
import "./GreetingForm.css";

class GreetingForm extends Component {
  constructor(props) {
    super(props);
  }

  handleLogoutProcess = () => {
    this.props.handleLogOut();
  };
  render() {
    return (
      <div className="containerLogedIn">
        <div className="greeting">Hello!! {this.props.user.fullname}</div>

        <button
          type="button"
          class="btn btn-danger"
          onClick={this.handleLogoutProcess}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default GreetingForm;
