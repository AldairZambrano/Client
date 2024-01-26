const HeroCont = () => {
  return(
    <section id="page-header" className="about-header">  
              <h2>#knowus</h2>
              <p>Lorem ipsumuos ea quisquam eligendi porro, ullam explicabo distinctio numquam magni. Labore natus sapiente saepe ea officiis</p>
        </section>
  )
}

const Contactss = () => {
  return(
    <section id="contact-details" className="section-p1">
    <div className="details">
        <span>GET IN TOUCH</span>
        <h2>visit one of our agency locations or contact us today</h2>
        <h3>Head Office</h3>
    <div>
        <li>
            <i className="fal fa-map"></i>
            <p>56 glassfors atrwwr glasgow g1 1ul new york</p>
        </li>
        <li>
            <i className="fal fa-envelope"></i>
            <p> contact@example.com</p>
        </li>
        <li>
            <i className="fal fa-phone-alt"></i>
            <p> contact@example.com</p>
        </li>
        <li>
            <i className="fal fa-clock"></i>
            <p>monday to saturday: 9.00am to 16.pm</p>
        </li>
    </div>       
    </div>
    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125228.99245227253!2d-74.26479815100775!3d11.231513879991281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f66ff59a173d%3A0x124b95fc153af9b8!2sSanta%20Marta%2C%20Magdalena!5e0!3m2!1ses-419!2sco!4v1692304179864!5m2!1ses-419!2sco" width='600' height='450' style={{border:'0'}} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
    </div>
</section>
  )
}

const Formulario = () => {
  return(
    <section id="form-details">
    <form action="">
        <span>Leave a message</span>
        <h2>we love to hear from you</h2>
        <input type="text" placeholder="ypur name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="subjecy" />
        <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
        <button className="normal">Submit</button>
    </form>

    <div className="people">
        <div>
            <img src="img/people/1.png" alt=""/>
            <p><span>jhon doe</span> Senior marketing manager <br/>Phonw: + 00 123 00 77 88 <br/>Email: contact@exapmle.com</p>
        </div>
        <div>
            <img src="img/people/2.png" alt=""/>
            <p><span>jhon doe</span> Senior marketing manager <br/>Phonw: + 00 123 00 77 88 <br/>Email: contact@exapmle.com</p>
        </div>
        <div>
            <img src="img/people/3.png" alt="" />
            <p><span>jhon doe</span> Senior marketing manager <br/>Phonw: + 00 123 00 77 88 <br/>Email: contact@exapmle.com</p>
        </div>
    </div>
</section>
  )
}

export default function Contact () {
  return (
    <>
    <HeroCont></HeroCont>
    <Contactss></Contactss>
    <Formulario></Formulario>
    </>
  )
}
