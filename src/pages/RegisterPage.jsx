import React, { Component } from "react";
import Register from "../components/register/Register";


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
          <h1>Register</h1>
          <Register  history={this.props.history} location={this.props.location} handleLogin={this.props.handleLogin}/>
        </div>
      </article>
    );
  }
}

export default LoginPage;
