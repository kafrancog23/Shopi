
export const  totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.price, 0);
}
