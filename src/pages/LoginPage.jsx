import React, { Component } from "react";
import Login from "../components/login/Login";


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }

  render() {
    return (
      <article className="container">
        <div className="login-page-global-container">
          <h1>Log in</h1>
          <Login  history={this.props.history} location={this.props.location} handleLogin={this.props.handleLogin}/>
        </div>
      </article>
    );
  }
}

export default LoginPage;
