import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

export default class SideBar extends React.Component {
  render() {
    return (
        <div className="bikes-list">
            <NavLink exact to="/" activeClassName="active" className="bike">Mountain Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Road Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Triathlon Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Track Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Tandems</NavLink>
        </div>
    )
  }
}