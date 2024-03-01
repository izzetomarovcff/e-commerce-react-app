export const AddToCart = product =>{
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}
export const ProductPlus = product =>{
    return {
        type: 'PRODUCT_PLUS',
        payload: product
    }
}
export const ProductMinus = product =>{
    return {
        type: 'PRODUCT_MINUS',
        payload: product
    }
}