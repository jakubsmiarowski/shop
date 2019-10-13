import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="contact" activeClassName="active">Contact</NavLink>
                <NavLink exact to="cart" activeClassName="active">Cart</NavLink>
            </nav>
        );
    }
}

export default NavBar;