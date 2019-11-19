import React from "react";
import SideBar from '../../components/SideBar/SideBar';
import ProductsList from '../../components/ProductsList/ProductsList';
import Pagination from '../../components/Pagination/Pagination';
import "./Home.css";

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container container">
        <SideBar/>
        <Pagination>
          <ProductsList />
        </Pagination>
      </div>
    )
  }
}
