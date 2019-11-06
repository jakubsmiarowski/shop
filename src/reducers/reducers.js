import {
    ADD_TO_CART,
    REMOVE_ITEM,
    FILTER_BY_MOUNTAIN,
    FILTER_BY_ROAD,
    FILTER_BY_TRIATHLON,
    FILTER_BY_TRACK,
    FILTER_BY_ELECTRIC,
    FILTER_BY_TANDEM,
    MOUNTAIN_REMOVED,
    ROAD_REMOVED,
    TRIATHLON_REMOVED,
    TRACK_REMOVED,
    ELECTRIC_REMOVED,
    TANDEM_REMOVED
} from '../actions/actions';
import bikes from '../data/data.json';

//Action Name Creator
const createActionName = name => `app/${reducerName}/${name}`;

//Actions
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_ITEM = createActionName('REMOVE_ITEM');
export const FILTER_BY_MOUNTAIN = createActionName('FILTER_BY_MOUNTAIN');
export const FILTER_BY_ROAD = createActionName('FILTER_BY_ROAD');
export const FILTER_BY_TRIATHLON = createActionName('FILTER_BY_TRIATHLON');
export const FILTER_BY_TRACK = createActionName('FILTER_BY_TRACK');
export const FILTER_BY_ELECTRIC = createActionName('FILTER_BY_ELECTRIC');
export const FILTER_BY_TANDEM = createActionName('FILTER_BY_TANDEM');
export const MOUNTAIN_REMOVED = createActionName('MOUNTAIN_REMOVED');
export const ROAD_REMOVED = createActionName('ROAD_REMOVED');
export const TRIATHLON_REMOVED = createActionName('TRIATHLON_REMOVED');
export const TRACK_REMOVED = createActionName('TRACK_REMOVED');
export const ELECTRIC_REMOVED = createActionName('ELECTRIC_REMOVED');
export const TANDEM_REMOVED = createActionName('TANDEM_REMOVED');

//State
const initialState = {
    items: bikes,
};

//Reducer
export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            return;
        case REMOVE_ITEM:
            return;
        case FILTER_BY_MOUNTAIN:
            return;
        case FILTER_BY_ROAD:
            return;
        case FILTER_BY_TRIATHLON:
            return;
        case FILTER_BY_TRACK:
            return;
        case FILTER_BY_ELECTRIC:
            return;
        case FILTER_BY_TANDEM:
            return;
        case MOUNTAIN_REMOVED:
            return;
        case ROAD_REMOVED:
            return;
        case TRIATHLON_REMOVED:
            return;
        case TRACK_REMOVED:
            return;
        case ELECTRIC_REMOVED:
            return;
        case TANDEM_REMOVED:
            return;
        default:
            return statePart;
    }
}