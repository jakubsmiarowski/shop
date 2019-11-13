import React from 'react';
import { connect } from 'react-redux';
import { addToCart, passID }from '../../actions/actions';


function shuffleArray(array) {
  let i = array.length - 1;
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
              <p>{item.text}</p>
              <p>{item.category}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
RandomBike.propTypes = {
  posts: React.PropTypes.array,
};
export default RandomBike;