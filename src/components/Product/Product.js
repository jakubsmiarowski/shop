import React from 'react';
import { connect } from 'react-redux'
import { addToCart} from '../../actions/actions';
import Zoom from 'react-reveal/Zoom';
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
                <p>{item.desc}</p>
              </div>
    
              <div className="product-content">
                <h3>Price: {item.price} £</h3>
                <button to="/" className="product-button" onClick={() => { this.handleClick(item.id) }}>Add to cart</button>
              </div>
            </div>
          )
        })
    
        return (
          <Zoom cascade>
            <div className="product-container container">
                {itemList}
            </div>
          </Zoom>
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