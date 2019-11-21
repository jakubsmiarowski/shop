import {
    ADD_TO_CART,
    PASS_ID,
    RANDOM_BIKE,
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
    FILTER_BY_GRAVEL,
    MOUNTAIN_REMOVED,
    ROAD_REMOVED,
    TRIATHLON_REMOVED,
    TRACK_REMOVED,
    ELECTRIC_REMOVED,
    GRAVEL_REMOVED,
    RESET_FILTERS
} from '../actions/actions';
import bikes from '../data/data.json';

//State
const initialState = {
    items: bikes,
    addedItems: [],
    total: 0,
    clickedProduct: [],
    cartItems: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price,
                cartItems: state.cartItems + 1
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                cartItems: state.cartItems + 1
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

    if (action.type === RANDOM_BIKE) {
        let randomProduct = state.items.find(item => item.id === action.id)
        return {
            ...state,
            randomProduct: [randomProduct]
        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            cartItems: state.cartItems - itemToRemove.quantity
        }
    }
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal,
            cartItems: state.cartItems + 1
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
                total: newTotal,
                cartItems: state.cartItems - 1
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
                cartItems: state.cartItems - 1
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

    if (action.type === FILTER_BY_MOUNTAIN) {
        let filteredMountains = initialState.items.filter(x => x.tag === 'mountain');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredMountains]
            }
        }
        return {
            ...state,
            items: [...filteredMountains]
        }
    }

    if (action.type === MOUNTAIN_REMOVED) {
        let mountainRemoved = state.items.filter(x => x.tag !== 'mountain');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'mountain').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: mountainRemoved
        }
    }

    if (action.type === FILTER_BY_ROAD) {
        let filteredRoad = initialState.items.filter(x => x.tag === 'road');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredRoad]
            }
        }
        return {
            ...state,
            items: [...filteredRoad]
        }
    }

    if (action.type === ROAD_REMOVED) {
        let roadRemoved = state.items.filter(x => x.tag !== 'road');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'road').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: roadRemoved
        }
    }
    if (action.type === FILTER_BY_TRIATHLON) {
        let filteredTriathlon = initialState.items.filter(x => x.tag === 'triathlon');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredTriathlon]
            }
        }
        return {
            ...state,
            items: [...filteredTriathlon]
        }
    }

    if (action.type === TRIATHLON_REMOVED) {
        let triathlonRemoved = state.items.filter(x => x.tag !== 'triathlon');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'triathlon').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: triathlonRemoved
        }
    }

    if (action.type === FILTER_BY_TRACK) {
        let filteredTrack = initialState.items.filter(x => x.tag === 'track');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredTrack]
            }
        }
        return {
            ...state,
            items: [...filteredTrack]
        }
    }

    if (action.type === TRACK_REMOVED) {
        let trackRemoved = state.items.filter(x => x.tag !== 'track');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'track').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: trackRemoved
        }
    }

    if (action.type === FILTER_BY_ELECTRIC) {
        let filteredElectric = initialState.items.filter(x => x.tag === 'electric');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredElectric]
            }
        }
        return {
            ...state,
            items: [...filteredElectric]
        }
    }

    if (action.type === ELECTRIC_REMOVED) {
        let electricRemoved = state.items.filter(x => x.tag !== 'electric');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'electric').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: electricRemoved
        }
    }

    if (action.type === FILTER_BY_GRAVEL) {
        let filteredGravel = initialState.items.filter(x => x.tag === 'gravel');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredGravel]
            }
        }
        return {
            ...state,
            items: [...filteredGravel]
        }
    }

    if (action.type === GRAVEL_REMOVED) {
        let gravelRemoved = state.items.filter(x => x.tag !== 'gravel');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'gravel').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: gravelRemoved
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