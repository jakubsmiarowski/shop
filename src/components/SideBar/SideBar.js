import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

export default class SideBar extends React.Component {
  render() {

    /*handleReset = e => {
      
    }*/

    const bikes = [
      {id: "mountain"},
      {id: "road"},
      {id: "triathlon"},
      {id: "track"},
      {id: "electric"},
      {id: "tandem"}
    ]

    return (
        <div className="bikes-list">
            <NavLink exact to="/" activeClassName="active" className="bike">Mountain Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Road Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Triathlon Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Track Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Electric Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Tandems</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike reset">Reset Filters</NavLink>
        </div>


        /*<form className="bikes-list">
          {bikes.map(item => (
            <div className="input">
              <NavLink
                id={item.id}
                type="checkbox"
                onChange={}
                className="bike"
              />
              <label>{item.id}</label>
            </div>
          ))}
        </form>*/
    )
  }
}