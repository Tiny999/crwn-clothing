import cartItem from "../../components/cart-item/cart-item";

export const addItemToCart = (cartItems, itemToAdd) => {

    const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else{
        return [ ...cartItems, { ...itemToAdd, quantity: 1 } ]
    }
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }

    return cartItems.map(item =>
         item.id === itemToRemove.id 
            ? { ...item, quantity: item.quantity - 1 } 
            : item)

}

export const clearItemfromCart = (cartItems, itemToClear) => (

    cartItems.filter( item => item.id !== itemToClear.id )

)