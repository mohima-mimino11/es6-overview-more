import './Cart.css'
const Cart = ({cart}) => {
  return (
    <div>
      <h5>Cart: {cart.length} </h5>
      <div className="cart-container">
        {
          cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
        }

      </div>
      
    </div>
  );
};

export default Cart;