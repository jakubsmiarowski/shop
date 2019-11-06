import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="contact" activeClassName="active">Contact</NavLink>
                <NavLink exact to="terms" activeClassName="active">Terms</NavLink>
                <div className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </nav>
        );
    }
}

export default NavBar;