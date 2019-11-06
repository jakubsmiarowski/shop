import reducers from '../reducers/reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

export default store;