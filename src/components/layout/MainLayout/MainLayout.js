import React from "react";

import { Header } from "../../features/Header/Header";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
