const INITIAL_STATE = {
    cart: [],
    favorites: [],
}
export default (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case "ADD_TO_CART":
            let products = { ...state, cart: [...state.cart, action.payload] }
            console.log(products.cart)
            window.localStorage.setItem("cart", JSON.stringify(products.cart))
            return products
        default:
            return state;
    }
}