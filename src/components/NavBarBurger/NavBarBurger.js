import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from "react-burger-menu";
import './NavBarBurger.css';

function NavBarBurger(props) {

    return (
        <Menu {...props} right>
            <nav className="container nav-bar-burger">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="contact" activeClassName="active">Contact</NavLink>
                <NavLink exact to="terms" activeClassName="active">Terms</NavLink>
                <NavLink exact to="cart" activeClassName="active"> Cart</NavLink>
            </nav>
        </Menu>
    );
}


export default NavBarBurger;