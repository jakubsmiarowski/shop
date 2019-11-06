import React from 'react';
import { connect } from 'react-redux';
import { addToCart }from '../../actions/actions';
import { Link } from 'react-router-dom';
import './ProductsList.css';

class ProductsList extends React.Component {

    handleClick =(id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div className="products" key={item.id}>
                    <h5 className="products-title">{item.title}</h5>
                    <p className="products-price">Price: {item.price} €</p>
                    <div className="products-img">
                        <button className="cart" onClick={() => { this.handleClick(item.id) }}>Add to Cart</button>
                        <Link exact to="/product"><img src={item.img} alt={item.title}/></Link>
                    </div>
                </div>
            )
        })
        
        return(
            <div className="products-container">
                {itemList}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

const mapDispatchToProps= (dispatch)=>{  
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);