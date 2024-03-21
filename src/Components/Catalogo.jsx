import useFetch from '../hooks/useFetch';
import { Catalogos } from '../data/mockData';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
export default function Catalogo() {
  const [cartItems, setCartItems] = useState([])


const addToCart = (item) => {
  const updatedCart = [...cartItems, { ...item, quantity: 1 }];
  setCartItems(updatedCart);
};


  const {data} = useFetch(Catalogos);
  
  return (
    <section id="product1" className="section-p1">
      <h2>Productos Destacados</h2>
      <div>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <p>Coleccíon de productos de invierno</p>
      <div className="pro-container">
        {Catalogos.map((item) => (
          <div className="pro" key={item.id}>
            <img src={item.imagens} alt="product1" />
            <div className="des">
              <span>{item.nombre}</span>
              <h5>{item.description}</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>{item.price}</h4>
            </div>
            <a>
              <i
                className="fal fa-shopping-cart cart"
                onClick={addToCart}
              ></i>
            </a>
            <span>{(item.id)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}