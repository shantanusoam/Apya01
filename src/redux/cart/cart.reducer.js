import cartActionType from "./cart.types";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden                
            }
        case cartActionType.ADD_ITEM:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;