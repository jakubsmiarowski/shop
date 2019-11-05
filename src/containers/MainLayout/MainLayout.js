import React from "react";
import Footer from '../Footer/Footer';
import { Header } from "../Header/Header";

export class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
