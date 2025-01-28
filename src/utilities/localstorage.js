const getStoredCart = () =>{
  const storedCartString = localStorage.getItem('cart');
  if(storedCartString){
    return JSON.parse(storedCartString);
  }
  return [];
}

const saveCartToLS = cart =>{
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified)

}

const addCartToLS = (id) =>{
  const cart = getStoredCart();
  cart.push(id);
  // save to localStorage
  saveCartToLS(cart)

}

const removeCartFromLS = id =>{
   const cart = getStoredCart();
   const remainingCart = cart.filter(idx => idx !== id);
   saveCartToLS(remainingCart);
}

export { addCartToLS, getStoredCart, removeCartFromLS }