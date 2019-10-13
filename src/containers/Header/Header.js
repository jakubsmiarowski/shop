import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = props => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <NavBar />
    </div>
  );
};
