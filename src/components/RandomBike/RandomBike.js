import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addToCart, passID }from '../../actions/actions';

function shuffleArray(array) {
    let i = array.length - (array.length - 1);
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  class RandomBike extends React.Component {
  
      handleClick =(id) => {
          this.props.addToCart(id);
      }
  
      handleId = (id) => {
          this.props.passID(id);
      }

    render() {
      const shuffledBikes = shuffleArray(this.props.items);
      return (
        <ul>
          {shuffledBikes.map((item, idx) => {
            return (
              <li key={idx}>
                <p>{item.title}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }
/*  RandomBike.propTypes = {
    items: React.PropTypes.array,
  };*/

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
export default connect(mapStateToProps,mapDispatchToProps)(RandomBike);