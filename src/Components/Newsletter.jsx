export default function Newsletter () {
    return(
        <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign up for Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="You email adress"/>
            <button className="normal">Sign up</button>
        </div>
    </section>
    )
}