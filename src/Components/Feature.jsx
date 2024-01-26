import Imagenes from "./Imagenes"

export default function Feacture () {
    return(
    <section id="feature" className="section-p1"> 
        <div className="fex-box">
            <img src={Imagenes.F1} alt="facture1"/>
            <h6>Free shipping</h6>
            </div>
            <div className="fex-box">
                <img src={Imagenes.F2} alt="facture2"/>
                <h6>Online Order</h6>
            </div>
            <div className="fex-box">
                <img src={Imagenes.F3} alt="facture3"/>
                <h6>Save Money</h6>
            </div>
            <div className="fex-box">
                <img src={Imagenes.F4} alt="facture4"/>
                <h6>Promotions</h6>
            </div>   
            <div className="fex-box">
                <img src={Imagenes.F5} alt="facture5" />
                <h6>Happy Sell</h6>
            </div>
            <div className="fex-box">
                <img src={Imagenes.F6} alt="facture6"/>
                <h6>F24/7 Support</h6>
        </div> 
    </section>
    )
}