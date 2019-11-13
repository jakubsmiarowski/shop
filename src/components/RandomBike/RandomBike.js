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
        return (
            <div className="random-bike">
                <p>Random Bike</p>
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