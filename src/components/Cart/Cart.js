import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeItem, addQuantity, subtractQuantity } from "../../actions/actions";
import "./Cart.css";

class Cart extends React.Component {

  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  render() {
    let addedItems = this.props.items.length ? 
      (
        this.props.items.map(item => {
          return (
            <li className="cart-item" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.title} className="cart-img"/>
              </div>

              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p><b>Price: {item.price}€</b></p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div className="add-remove">
                  <Link to="/cart" onClick={() => {this.handleAddQuantity(item.id)}}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Link>
                  <Link to="/cart" onClick={() => {this.handleSubtractQuantity(item.id)}}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Link>
                  <Link to="/cart" onClick={()=>{this.handleRemove(item.id)}}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Link>
                </div>
              </div>
            </li>
          )
        })
      ) : 
      (
        <p>Nothing yet:) Get to it!</p>
      )
      return (
        <div className="cart-container container">
            <h5>You have ordered:</h5>
            <ul className="collection">
              {addedItems}
            </ul>
            <Recipe />
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);