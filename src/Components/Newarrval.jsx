import imagenes from '../Components/Imagenes'

const New = ({Mage, nombre, description, precie}) => {
    return(
        <div className="pro">
        <img src={Mage} alt="product1"/>
        <div className="des">
            <span>{nombre}</span>
            <h5>{description}</h5>
            <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <h4>{precie}</h4>
        </div>
        <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
    </div>
    )
}

export default function NewArrval () {
    return(
        <section id="product1" className="section-p1">
        <h2>
            New Arrivals
        </h2>
        <p>Summer Collection New Morden Design</p>
        <div className="pro-container">
        <New Mage={imagenes.productn1} precie='222' nombre='ww' description='ssss'></New>
        <New Mage={imagenes.productn1}></New>
        <New Mage={imagenes.productn1}></New>
        <New Mage={imagenes.productn1}></New>
        <New Mage={imagenes.productn1}></New>
        <New Mage={imagenes.productn1}></New>
        <New Mage={imagenes.productn1}></New>
        <New Mage={imagenes.productn1}></New>
        </div>
    </section>
    )
}