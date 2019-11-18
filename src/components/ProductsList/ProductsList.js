import React from 'react';
import Pulse from 'react-reveal/Pulse';
import { connect } from 'react-redux';
import { addToCart, passID }from '../../actions/actions';
import { Link } from 'react-router-dom';
import './ProductsList.css';


class ProductsList extends React.Component {

    handleClick =(id) => {
        this.props.addToCart(id);
    }

    handleId = (id) => {
        this.props.passID(id);
    }


    render() {
        const data = this.props.data;
        let itemList = data.map(item=>{
            return(
                <div className="products" key={item.id}>
                    <h5 className="products-title">{item.title}</h5>
                    <p className="products-price">Price: {item.price} €</p>
                    <div className="products-img">
                        <Link exact to="/product" onClick={() => { this.handleId(item.id) }}><img src={item.img} alt={item.title}/></Link>
                        <button className="products-button"  onClick={() => { this.handleClick(item.id) }}>ADD TO CART</button>
                    </div>
                    
                </div>
            )
        })
        
        return(
            <div className="products-container paginated-data">
                <Pulse>
                    {itemList}
                </Pulse>
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
        addToCart: (id)=>{dispatch(addToCart(id))},
        passID: (id) => {dispatch(passID(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList);