import React, { Component } from "react";
import "./LoginForm.css";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showOrHideForm: false,
        placeholderUsername: 'username/email',
        placeholderPassword: 'password'
    };
  }

  handleShowOrHideForm = () => {
    if (this.state.showOrHideForm) {
      this.setState((prevState) => {
        prevState.showOrHideForm = false;
        return prevState;
      });
    } else {
      this.setState((prevState) => {
        prevState.showOrHideForm = true;
        return prevState;
      });
    }
  };

  handleLoginProcess = () => {
    this.props.handleLogin();
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.handleShowOrHideForm}
        >
          Login
        </button>

        <form
          action=""
          method="POST"
          className={"form-horizontal login-form " + this.state.showOrHideForm}
          onSubmit={this.handleLoginProcess}
          role="form"
        >
          <div className="form-group">
            <legend>Login Form</legend>
          </div>
          <div className="form-group">
            <div className="col-sm-12">Username/email:</div>
            <div className="col-sm-12">
              <input
                type="text"
                name="username"
                id="input"
                className="form-control"
                title=""
                placeholder={this.state.placeholderUsername}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">Password:</div>
            <div className="col-sm-12">
              <input
                type="password"
                name=""
                id="input"
                className="form-control"
                title=""
                placeholder={this.state.placeholderPassword}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
