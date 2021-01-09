import { USER_ACTION_TYPES } from "./user.types";

const currentState = {
    currentUser: null
};

const userReducer = (state = currentState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;