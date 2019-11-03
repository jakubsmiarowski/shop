import React from "react";
import SideBar from '../../components/SideBar/SideBar';
import ProductsList from '../../components/ProductsList/ProductsList';
import "./Home.css";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container container">
        <SideBar />
        <ProductsList />
      </div>
    )
  }
}
