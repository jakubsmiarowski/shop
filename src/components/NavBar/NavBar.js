import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                <div className="icon-container">
                    <Link exact to="cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;