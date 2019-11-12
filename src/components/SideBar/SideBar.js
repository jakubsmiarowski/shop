import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../actions/actions';
import './SideBar.css';

class SideBar extends React.Component {

    
    handleFilter = e => {
      const id = e.target.id;
      const checked = e.target.checked;
  
      if (id === "mountain") {
        if (checked) {
          return this.props.filterByMountain();
        }
        return this.props.mountainRemoved();
      }
      if (id === "road") {
        if (checked) {
          return this.props.filterByRoad();
        }
        return this.props.roadRemoved();
      }
      if (id === "triathlon") {
        if (checked) {
          return this.props.filterByTriathlon();
        }
        return this.props.triathlonRemoved();
      }
      if (id === "track") {
        if (checked) {
          return this.props.filterByTrack();
        }
        return this.props.trackRemoved();
      }
      if (id === "electric") {
        if (checked) {
          return this.props.filterByElectric();
        }
        return this.props.electricRemoved();
      }
      if (id === "tandem") {
        if (checked) {
          return this.props.filterByTandem();
        }
        return this.props.tandemRemoved();
      }
  };

    reset = () => {
      const inputs = document.getElementsByTagName("input");
      for (var input of inputs) {
        input.checked = false;
      }
      this.props.resetFilters();
    };


  render() {

    const resetData = [
      { id: "reset", name: "x"}
    ]

    const bikes = [
      {id: "mountain", name: "mountain bikes"},
      {id: "road", name: "road bikes"},
      {id: "triathlon", name: "triathlon bikes"},
      {id: "track", name: "track bikes"},
      {id: "electric", name: "electric bikes"},
      {id: "tandem", name: "tandems"},
    ]


    return (

        <form className="bikes-list">
          

        {bikes.map(item => (
          <div key={item.id} className="bike">
            <input
              id={item.id}
              type="checkbox"
              onChange={this.handleFilter}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
        ))}
        
        <div className="line" />

        {resetData.map(item => (
          <NavLink 
            id={item.id}
            exact to="/" 
            activeClassName="active" 
            className="bike reset"
            onClick={id => {this.reset()}}
          >{item.name}
          </NavLink>
        ))}
        </form>
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