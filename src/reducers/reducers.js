import {
    ADD_TO_CART,
    PASS_ID,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
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
    TANDEM_REMOVED,
    RESET_FILTERS
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
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }

    if (action.type === PASS_ID) {
        let clickedProduct = state.items.find(item => item.id === action.id)
        return {
            ...state,
            clickedProduct: [clickedProduct]
        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }
    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 20
        }
    }
    if (action.type === SUB_SHIPPING) {
        if (state.addedItems === []) {
            return {
                ...state,
                total: 0.00
            }
        }
        return {
            ...state,
            total: state.total - 20
        }
    }
    if (action.type === RESET_FILTERS) {
        var sortedById = initialState.items.sort((a, b) => (a.id - b.id))
        return {
            ...state,
            items: sortedById
        }
    }
    return state
}

export default reducer;