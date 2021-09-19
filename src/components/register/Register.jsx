import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import "../login/login.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityPassword: false,
      firstTry: true,
      remember: false,
    };
    this.handleChangeVisibilityPassword =
      this.handleChangeVisibilityPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChangeVisibilityPassword() {
    this.setState({ visibilityPassword: !this.state.visibilityPassword });
  }

  handleSubmit(event) {
    if (event){
    event.preventDefault();
    event.stopPropagation();
    }
    this.changePath();
  }

  handleSubmitForm(event){
    if (event){
    event.preventDefault();
    event.stopPropagation();
    }
    this.setState({ firstTry: false });
  }

  changePath() {
    this.props.handleLogin();
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    const { visibilityPassword, remember } = this.state;
    return (
      <form
        action=""
        method="post"
        className="form-container login-form"
        onSubmit={this.handleSubmitForm}
      >
        <div className="login-form-container">
        <Input name={"Username"} minLength="0" maxLength="20" type="text">
          <AccountCircleIcon className={`icon icon-color`} />
        </Input>
        <Input name={"Email"} minLength="0" maxLength="20" type="text">
          <AlternateEmailIcon className={`icon icon-color`} />
        </Input>
        <Input
          name={"Password"}
          type={visibilityPassword ? "text" : "password"}
        >
          <LockOpenIcon className={`icon icon-color`} />
          {visibilityPassword ? (
            <VisibilityOffIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          ) : (
            <VisibilityIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          )}
        </Input>
        <div className="espaciado">
            <Button className="principal" handleClick={this.handleSubmit} text="Register" />
        </div>
        <div className="login-register-container espaciado">
          <div>
            <NavLink to="/login" activeClassName="">
            <span>I have an account</span>
          </NavLink>
          </div>
        </div>
        </div>
      </form>
    );
  }
}

export default Login;
