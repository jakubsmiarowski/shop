import React from "react";
import Slide from "react-reveal/Slide";
import RandomBike from "../RandomBike/RandomBike";
import "./Contact.css";

export class Contact extends React.Component {
  render() {
    return (
      <div className="contact-container container">
        <div className="contact">
          <div className="address">
            <h6>Prosta 68</h6>
            <h6>Warsaw, Poland</h6>
            <h6>Mobile: +48 123 456 789</h6>
            <h6>Fax: +48 345 67 89</h6>
            <h6>bike@shop.pl</h6>
          </div>

          <div className="info">
            <Slide left>
              <div className="form">
                <input className="name" type="text" placeholder="Name"></input>
                <input className="email" type="text" placeholder="Email"></input>
                <textarea className="text" type="text" placeholder="Your message" cols="40" rows="15"></textarea>
                <button className="button-contact">Send</button>
              </div>
            </Slide>
          </div>
        </div>
        <Slide right>
            <div className="choice">
              <h6>Bike of the Day</h6>
              <RandomBike />
            </div>
          </Slide>
      </div>
    );
  }
}
