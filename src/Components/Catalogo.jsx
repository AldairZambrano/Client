import imagenes from '../Components/Imagenes';
// eslint-disable-next-line react/prop-types
export default function Catalogo({ addToCart}) {
  const Catalogos = [
    { id: 1, nombre: 'Lapiz', price: 500, description: 'Lapiz mongol de excelente calidad', imagens: imagenes.LapizMono },
    { id: 2, nombre: 'Lapicero', price: 1000, description: 'Lapicero pencil con alta durabilidad', imagens: imagenes.Lapicero },
    { id: 3, nombre: 'Libreta', price: 2500, description: 'Hojas ultra gruesas', imagens: imagenes.Libreta },
    { id: 4, nombre: 'Regla', price: 3000, description: 'Regla de aluminio super resistente', imagens: imagenes.Regla },
    // Agrega más elementos al catálogo según sea necesario
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
};
  
  return (
    <section id="product1" className="section-p1">
      <h2>Productos Destacados</h2>
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
                onClick={() => handleAddToCart(item)}
              ></i>
            </a>
            <span>{(item.id)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
// import { useState, useEffect } from 'react';
// import imagenes from '../Components/Imagenes';

// const Catalogo = ({ addToCart, cartItems }) => {
//   const Catalogos = [
//     // ... (resto de tus productos)
//   ];

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };

//   return (
//     <section id="product1" className="section-p1">
//       <h2>Productos Destacados</h2>
//       <p>Colección de productos de invierno</p>
//       <div className="pro-container">
//         {Catalogos.map((item) => (
//           <div className="pro" key={item.id}>
//             {/* ... (resto de tu código) */}
//             <a>
//               <i
//                 className="fal fa-shopping-cart cart"
//                 onClick={() => handleAddToCart(item)}
//               ></i>
//             </a>
//             <span>{item.id}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Catalogo;