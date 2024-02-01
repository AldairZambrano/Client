import { useState } from 'react';
import Catalogo from '../Components/Catalogo';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);



  const addToCart = (item) => {
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Catalogo addToCart={addToCart} cartItems={cartItems} />
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td className='remove' >Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link>
                    <i className="far fa-times-circle" onClick={() => removeFromCart(index)}>
                    </i>
                  </Link>
                </td>
                <td className='Image'><img src={item.imagens} alt={`Product ${index}`} /></td>
                <td>{item.nombre}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, e.target.value)}
                  />
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>${calculateSubtotal()}</td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
