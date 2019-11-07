export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const SUB_SHIPPING = 'SUB_SHIPPING';
export const FILTER_BY_MOUNTAIN = 'FILTER_BY_MOUNTAIN';
export const MOUNTAIN_REMOVED = 'RISERS_MOUNTAIN';
export const FILTER_BY_ROAD = 'FILTER_BY_ROAD';
export const ROAD_REMOVED = 'ROAD_REMOVED';
export const FILTER_BY_TRIATHLON = 'FILTER_BY_TRIATHLON';
export const TRIATHLON_REMOVED = 'TRIATHLON_REMOVED';
export const FILTER_BY_TRACK = 'FILTER_BY_TRACK';
export const TRACK_REMOVED = 'TRACK_REMOVED';
export const FILTER_BY_ELECTRIC = 'FILTER_BY_ELECTRIC';
export const ELECTRIC_REMOVED = 'ELECTRIC_REMOVED';
export const FILTER_BY_TANDEM = 'FILTER_BY_TANDEM';
export const TANDEM_REMOVED = 'TANDEM_REMOVED';
export const RESET_FILTERS = 'RESET_FILTERS';

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = id => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const filterByMountain = () => {
    return {
        type: FILTER_BY_MOUNTAIN,
    }
}

export const mountainRemoved = () => {
    return {
        type: MOUNTAIN_REMOVED,
    }
}

export const filterByRoad = () => {
    return {
        type: FILTER_BY_ROAD,
    }
}

export const roadRemoved = () => {
    return {
        type: ROAD_REMOVED,
    }
}

export const filterByTriathlon = () => {
    return {
        type: FILTER_BY_TRIATHLON,
    }
}

export const triathlonRemoved = () => {
    return {
        type: TRIATHLON_REMOVED,
    }
}
export const filterByTrack = () => {
    return {
        type: FILTER_BY_TRACK,
    }
}

export const trackRemoved = () => {
    return {
        type: TRACK_REMOVED,
    }
}
export const filterByElectric = () => {
    return {
        type: FILTER_BY_ELECTRIC,
    }
}

export const electricRemoved = () => {
    return {
        type: ELECTRIC_REMOVED,
    }
}
export const filterByTandem = () => {
    return {
        type: FILTER_BY_TANDEM,
    }
}

export const tandemRemoved = () => {
    return {
        type: TANDEM_REMOVED,
    }
}

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    }
}