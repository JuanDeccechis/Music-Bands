import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/nav/Nav";
import HomePage from "./HomePage";

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      isLogged: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleLoggin = () => {
    localStorage.setItem("isLogged", "true");
    this.setState({ isLogged : true });
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
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;