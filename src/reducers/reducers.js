import {
    ADD_TO_CART,
    PASS_ID,
    REMOVE_ITEM,
    ADD_QUANTITY,
    SUB_QUANTITY,
    ADD_SHIPPING,
    SUB_SHIPPING,
    SORT_PRICE_ASC,
    SORT_PRICE_DESC,
    SORT_NAME_ASC,
    SORT_NAME_DESC,
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
    clickedProduct: [],
    randomProduct: bikes[Math.floor(Math.random() * bikes.length)]
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

    if (action.type === SORT_PRICE_ASC) {
        var sortedByPriceAsc = state.items.sort((a, b) => (a.price - b.price))
        return {
            ...state,
            items: [...sortedByPriceAsc]
        }
    }

    if (action.type === SORT_PRICE_DESC) {
        let sortedByPriceDesc = state.items.sort((a, b) => (b.price - a.price))
        return {
            ...state,
            items: [...sortedByPriceDesc]
        }
    }

    if (action.type === SORT_NAME_ASC) {
        let sortedByNameAsc = state.items.sort((a, b) => a.title.localeCompare(b.title))
        return {
            ...state,
            items: [...sortedByNameAsc]
        }
    }

    if (action.type === SORT_NAME_DESC) {
        let sortedByNameDesc = state.items.sort((a, b) => b.title.localeCompare(a.title))
        return {
            ...state,
            items: [...sortedByNameDesc]
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

    if (action.type === FILTER_BY_TANDEM) {
        let filteredTandem = initialState.items.filter(x => x.tag === 'tandem');
        let notEmpty = state.items.length !== bikes.length
        if (notEmpty) {
            return {
                ...state,
                items: [...state.items, ...filteredTandem]
            }
        }
        return {
            ...state,
            items: [...filteredTandem]
        }
    }

    if (action.type === TANDEM_REMOVED) {
        let tandemRemoved = state.items.filter(x => x.tag !== 'tandem');
        let Empty = state.items.length === state.items.filter(x => x.tag === 'tandem').length;
        if (Empty) {
            return {
                ...state,
                items: initialState.items
            }
        }
        return {
            ...state,
            items: tandemRemoved
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