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
  return (
    <>
    <HeroShop></HeroShop>
    <Catalogo></Catalogo>
    <Pagination></Pagination>
    <Newsletter></Newsletter>
    </>
  )
}
