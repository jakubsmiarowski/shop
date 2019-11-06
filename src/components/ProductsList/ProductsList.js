import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsList.css';

export default class ProductsList extends React.Component {
    render() {
        return (
            <div className="product-container">
                <div className="product">
                    <h5 className="product-title">Title</h5>
                    <p className="product-price">Price: </p>
                    <div className="product-img">
                        <button className="cart">Add to cart</button>
                        <Link exact to="/product"><img src="https://www.decathlon.co.uk/media/840/8405298/classic_1278143.jpg" alt="#"/></Link>
                    </div>
                </div>
            </div>
        );
    }
}