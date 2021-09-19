import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './nav.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FaceIcon from '@material-ui/icons/Face';

class Nav extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
  }

  render(){
      const { isLogged } = this.props;
      return(
        <ul className="nav">
            <li>
                <NavLink exact to="/" className="link"  activeClassName="active"> <HomeIcon className="icon" /> </NavLink>
            </li>
            <li>
                { isLogged ? 
                    <NavLink to="/account" className="link" activeClassName="active"> <FaceIcon className="icon" /> </NavLink>
                :
                    <NavLink to="/login" className="link" activeClassName="active"> <AccountCircleIcon className="icon" /> </NavLink>
                }
            </li>
        </ul>
      )
  }
}

export default Nav;
