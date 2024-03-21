import { useState } from 'react';
import { Catalogos } from '../data/mockData';
import HeroAbout from '../Components/HeroAbaout'
const Cart = () => {
  const [cartItems, setCartItems] = useState(Catalogos.map(item => ({ ...item, quantity: 1 })));
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
    <HeroAbout></HeroAbout>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
<td className='remove'>Image</td>
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
                  <button onClick={() => removeFromCart(index)} >
                    <i className="far fa-times-circle" ></i>
                  </button>
                </td>
                <td className='Image'><img src={item.imagens} alt={`Product ${index}`} /></td>
                <td >{item.nombre}</td>
                <td >${item.price}</td>
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
      <div id="coupon">
                    <h3 style={{fontWeight:'bold'}}>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter yout Coupon"/>
                        <button className="normal">Apply</button>
                    </div>
        </div>
        <div id="subtotal">
          <h3 style={{fontWeight:'bold'}}>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td style={{color:'#999595'}}>Cart Subtotal</td>
                <td style={{color:'#999595'}}>${calculateSubtotal() }</td>
              </tr>
              <tr>
                <td style={{color:'#999595'}}>Shopping</td>
                <td style={{color:'#999595'}}>free</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${calculateSubtotal()}</strong></td>
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