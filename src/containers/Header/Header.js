import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import NavBarBurger from '../../components/NavBarBurger/NavBarBurger';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <NavBar />
        <NavBarBurger />
      </div>
    </div>
  );
};
