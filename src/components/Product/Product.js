import React from 'react';
import { connect } from 'react-redux'
import { addToCart} from '../../actions/actions';
import './Product.css'

class Product extends React.Component {
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    
    render() {
        let itemList = this.props.clickedProduct.map(item => {
          return (
            <div className="product" key={item.id}>
              <div className="product-image">
                <img className="img-fluid" src={item.img} alt={item.title} />
                <h5 className="product-title">{item.title}</h5>
                <button to="/" className="cart" onClick={() => { this.handleClick(item.id) }}>Add to cart</button>
              </div>
    
              <div className="card-content">
                <p>{item.desc}</p>
                <h3>Price: {item.price} £</h3>
              </div>
            </div>
          )
        })
    
        return (
            <div className="product-container">
                {itemList}
            </div>
        )
      }
    }
    
const mapStateToProps = (state) => {
    return {
        clickedProduct: state.clickedProduct
    }
}
    
const mapDispatchToProps= (dispatch)=>{  
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Product)