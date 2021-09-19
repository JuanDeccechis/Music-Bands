import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/nav/Nav";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AccountPage from "./AccountPage";
import RegisterPage from "./RegisterPage";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      isLogged: false,
      username: ''
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  toggleLogin = (username) => {
    const { isLogged } = this.state;
    localStorage.setItem("isLogged", !isLogged);
    localStorage.setItem("username", username);
    this.setState({ isLogged : !isLogged, username: username });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { isLogged, width } = this.state;
    return (
      <div className="router">
        <BrowserRouter basename="/Music-bands">
          <Nav isMobile={width >= 992 ? false : true} isLogged={isLogged}/>
          {!isLogged ?
            <Switch>
              <Route exact path="/register" component={(props) => <RegisterPage {...props} handleLogin={this.toggleLogin} />}></Route>
              <Route path="/" component={(props) => <LoginPage {...props} handleLogin={this.toggleLogin} />}></Route>
              {/*<Route path="/login/recoveryPassword" component={(props) => <LoginPage {...props} />}></Route>*/}
            </Switch>
            :  
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/account" component={(props) => <AccountPage {...props} handleLogout={this.toggleLogin} />}></Route>
            </Switch>
          }
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;