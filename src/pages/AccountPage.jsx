import React, { Component } from "react";
import Button from "../components/button/Button";

class AccountPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (event){
        event.preventDefault();
        event.stopPropagation();
    }
    this.changePath();
  }

  changePath() {
    this.props.handleLogout();
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    return <article className="container">
        <h1>Hi {localStorage.getItem('username')}</h1>
        <div className="espaciado">
            <Button className="principal" handleClick={this.handleSubmit} text="Logout" />
        </div>

    </article>;
  }
}

export default AccountPage;
