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

//State
const initialState = {
    items: bikes,
    addedItems: [],
    total: 0,
    clickedProduct: []
};

const reducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
            //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    } else {
        return state
    }
}

export default reducer;