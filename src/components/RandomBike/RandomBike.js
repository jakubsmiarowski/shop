import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import bikes from '../../data/data.json';
import { addToCart }from '../../actions/actions';

class RandomBike extends React.Component {
    
    handleClick =(id) => {
      this.props.addToCart(id);
    }

    render() {
        const state = {randomProduct: bikes[Math.floor(Math.random()*bikes.length)]};
        const displayId = state.randomProduct.id;
        const displayTitle = state.randomProduct.title;
        const displayImg = state.randomProduct.img;
        const displayPrice = state.randomProduct.price;
        return (
            <div className="random-bike">
                <p>{displayTitle}</p>
                <p>{displayId}</p>
                <img src={displayImg} alt=""/>
                <p>{displayPrice}</p>
            </div>
      )
    }
  }

const mapStateToProps = (state)=>{
    return {
        randomProduct: state.randomProduct,
    }
}

const mapDispatchToProps= (dispatch)=>{  
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RandomBike);