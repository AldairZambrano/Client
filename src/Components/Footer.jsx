import Imagenes from "./Imagenes"

export default function Footer () {
    return(
        <footer className="section-p1">
        <div className="col">
            <img className="logo" src={Imagenes.LogoPng} alt="logo" />
            <h4>Contacto</h4>
            <p><strong>Direccion: </strong>Guacamayal, Zona Bananera</p>
            <p><strong>Telefono: </strong>3042651390</p>
            <p><strong>Horario: </strong>6:00 16:00, lunes - viernes</p>
            <div className="follow">
                <h4>Síganos</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>Acerca de </h4>
            <a href="#">Informacion entregada</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Contáctenos</a>
        </div>

        <div className="col">
            <h4>Mi cuenta</h4>
            <a href="#">Registrate</a>
            <a href="#">Ver carrito</a>
            <a href="#">Mi lista de deseos</a>
            <a href="#">Seguir mi pedido</a>
            <a href="#">Ayuda</a>
        </div>

        <div className="col install">
            <h4>Instalar aplicacíon</h4>
            <p>Desde App Store o Google Play</p>
            <div className="row">
                <img src={Imagenes.AppJpg} alt="App" />
                <img src={Imagenes.Play} alt="Play" />
            </div>
            <p>Pasarelas de pago seguras</p>
            <img src={Imagenes.Pay} alt="pay" />
        </div>

        <div className="copyright">
            <p>Comercio electronico Asesoria y servicios mis2start</p>
        </div>
    </footer>
    )
}