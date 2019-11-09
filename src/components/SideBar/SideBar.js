import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/actions';
import './SideBar.css';

class SideBar extends React.Component {

  
    /*handleReset = e => {
      
    }*/

    
    handleFilter = (e) => {
      const id = e.target.id;
      const clicked = e.target.clicked;

      if(id==="mountain") { 
        if(clicked) {
          return this.props.filterByMountain()
        }
        return this.props.mountainRemoved(); };
    }


  render() {

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
            <NavLink exact to="/" activeClassName="active" className="bike" onChange={this.handleFilter}>Mountain Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Road Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Triathlon Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Track Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Electric Bikes</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike">Tandems</NavLink>
            <NavLink exact to="/" activeClassName="active" className="bike reset">Reset Filters</NavLink>
        </div>


        /*<form className="bikes-list">
          {bikes.map(item => (
              <NavLink
                id={item.id}
                onClick={this.handleFilter}
                className="bike"
                <label>{item.id}</label>
              </NavLink>
          ))}
        </form>*/
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);