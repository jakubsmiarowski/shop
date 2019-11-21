import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as actions from '../../actions/actions';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavBar.css';

class NavBar extends Component {

    reset = () => {
        const inputs = document.getElementsByTagName("input");
        for (var input of inputs) {
        input.checked = false;
      }
        this.props.resetFilters();
      };

    render() {
        return (
            <nav className="nav-bar">
                <NavLink exact to="/" activeClassName="active" onClick={id => {this.reset(id)}}>Home</NavLink>
                <NavLink exact to="contact" activeClassName="active">Contact</NavLink>
                <NavLink exact to="terms" activeClassName="active">Terms</NavLink>
                <NavLink exact to="faq" activeClassName="active">Faq</NavLink>
                <div className="icon-container">
                    <Link exact to="cart">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        <div className="cart-items">
                            {this.props.cartItems}
                        </div>
                    </Link>
                </div>
            </nav>
        );
    }
}
const mapStatetoProps = state => {
    return {
        cartItems: state.cartItems
    }
}
const mapDispatchToProps = {
    ...actions
}

export default connect (mapStatetoProps, mapDispatchToProps)(NavBar);