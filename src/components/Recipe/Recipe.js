import React from 'react';
import { connect } from 'react-redux';
import './Recipe.css';

class Recipe extends React.Component {

    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.subtractShipping()
    }

    handleChecked = (e) => {
        if(e.target.checked) {
            this.props.addShipping();
        }
        else {
            this.props.subtractShipping();
        }
    }
    handleBonus = () => {
        alert('Bonus Code');
    }

    render() {
        return(
            <div className="recipe-container container">
                <li className="collection-code">
                    <input type="text" placeholder='Enter code' onClick={this.handleBonus} />
                </li>
                <li className="collection-item">
                    <label>
                        <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
                        <span>Shipping(+20€)</span>
                    </label>
                    <li className="total"><b>Total: {this.props.total}€</b></li>
                </li>
                <div className="checkout">
                    <button className="button-cart" onClick={() => { window.location.href = 'https://www.payu.pl/' }}>Checkout</button>
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
        subtractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);