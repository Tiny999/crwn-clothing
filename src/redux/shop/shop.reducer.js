import shopData from './Shop.data';

const initialState = {
    shopItems: shopData
};

const shopReducer = (state = initialState, action ) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer;