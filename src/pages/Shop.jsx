import { useState } from "react"
import Catalogo from "../Components/Catalogo"
import Newsletter from "../Components/Newsletter"
const HeroShop = ()=> {
  return(
    <section id="page-header">  
            <h2>Ofertas de gran valor</h2>
            <p>¡Ahorre más con cupones y hasta un 70% de descuento!</p>
        </section> 
  )
}
const Pagination = () => {
  return(
    <section id="pagination" className="section-p1">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#"><i className="fal fa-long-arrow-alt-right"></i></a>
        </section>
  )
}



export default function Shop() {

  const [cartItem, setCarItem] = useState([])

 const addToCart = (item) => {
  const updatedCart = [...cartItem, { ...item, quantity: 1 }];
  setCarItem(updatedCart);
}

const removeFromCart = (index) => {
  const updatedCart = [...cartItem];
  updatedCart.splice(index, 1);
  setCarItem(updatedCart);
};

const updateQuantity = (index, newQuantity) => {
  const updatedCart = [...cartItem];
  updatedCart[index].quantity = newQuantity;
  setCarItem(updatedCart);
};

const calculateSubtotal = () => {
  return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
};






  return (
    <>
    <HeroShop></HeroShop>
    <Catalogo addToCart={addToCart} cartItems={cartItem} calculateSubtotal={calculateSubtotal} updateQuantity={updateQuantity} removeFromCart={removeFromCart}></Catalogo>
    <Pagination></Pagination>
    <Newsletter></Newsletter>
    </>
  )
}
