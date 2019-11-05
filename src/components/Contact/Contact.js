import React from "react";
import ProductsList from "../ProductsList/ProductsList";
import "./Contact.css";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact container">
        <div className="address">
          <h6>Prosta 68</h6>
          <h6>Warsaw, Poland</h6>
          <h6>Mobile: +48 123 456 789</h6>
          <h6>Fax: +48 345 67 89</h6>
          <h6>bike@shop.pl</h6>
        </div>
        <div className="info">
          <div className="form">
            <input className="name" type="text" placeholder="Name"></input>
            <input className="email" type="text" placeholder="Email"></input>
            <textarea className="text" type="text" placeholder="Your message" cols="40" rows="15"></textarea>
            <button className="button-contact">Send</button>
          </div>
          <div className="choice">
            <h6>Customers Choice</h6>
            <ProductsList />
          </div>
        </div>
      </div>
    );
  }
}
