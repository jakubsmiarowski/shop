import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import NavBarBurger from '../../components/NavBarBurger/NavBarBurger';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Header.css';


class Header extends React.Component{

  reset = () => {
    const inputs = document.getElementsByTagName("input");
      for (var input of inputs) {
        input.checked = false;
      }
      this.props.resetFilters();
    };


  render(){
    return(
      <div className="header">
      <div className="container">
        <Link to="/">
          <div 
            className="logo"
            onClick={id => {this.reset(id)}}
          />
        </Link>
        <div className="icon-container-mobile">
          <Link exact to="cart">
            <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
             <div className="cart-items">
              {this.props.cartItems}
             </div>
          </Link>
        </div>
        <NavBar />
        <NavBarBurger />
      </div>
    </div>
    )
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

export default connect(mapStatetoProps,mapDispatchToProps)(Header);