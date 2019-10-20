import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItems = (item) => ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload:item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})

export const loadCart = (cartItems) => ({
    type: cartActionTypes.LOAD_CART,
    payload: cartItems
})

export const storeCart = () => ({
    type: cartActionTypes.STORE_CART
})