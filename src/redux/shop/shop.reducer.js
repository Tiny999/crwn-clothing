import shopActionTypes from "./shop.types";

const initialState = {
    shopItems: null, 
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = initialState, action ) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state, 
                isFetcing: false,
                shopItems: action.payload
            }
        case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;