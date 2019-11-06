import bikes from '../data/data.json';

/*Actions*/
export const ADD_TO_CART = createActionName('ADD_TO_CART');

/*Action Name Creator*/
const createActionName = name => `app/${reducerName}/${name}`;

/*State*/
const initialState = [];

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        default: return statePart;
    }
}