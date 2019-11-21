import React from 'react';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from "react-burger-menu";
import { connect } from 'react-redux';
import './NavBarBurger.css';


class NavBarBurger extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

    render(){
        return (
        <Menu right
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
        >
            <nav className="container nav-bar-burger">
                <NavLink exact to="/" activeClassName="active" onClick={() => this.closeMenu()}>Home</NavLink>
                <NavLink exact to="contact" activeClassName="active" onClick={() => this.closeMenu()}>Contact</NavLink>
                <NavLink exact to="terms" activeClassName="active" onClick={() => this.closeMenu()}>Terms</NavLink>
                <NavLink exact to="cart" activeClassName="active" onClick={() => this.closeMenu()}> Cart</NavLink>
            </nav>
        </Menu>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      isOpen: state.isOpen
    }
}



export default connect(mapStateToProps)(NavBarBurger);