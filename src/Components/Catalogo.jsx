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
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
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