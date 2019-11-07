import React from 'react';
import { connect } from 'react-redux';
import './Recipe.css';

class Recipe extends React.Component {

    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.substractShipping()
    }

    handleChecked = (e) => {
        if(e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.subtractShipping();
        }
    }

    render() {
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                            <span>Shipping(+20€)</span>
                        </label>
                        <li className="collection-item"><b>Total: {this.props.total} €</b></li>
                    </li>
                    <div className="checkout">
                        <button className="button-cart">Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);