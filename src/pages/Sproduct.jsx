import Newarrval from '../Components/Newarrval'
import NewLester from '../Components/Newsletter'
const Prodetails = () => {
    return(
        <section>
             <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src="img/products/f1.jpg" width="100%" id="MainImg" alt=""/>
                    
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src="img/products/f1.jpg" width="100%" className="small-img" alt=""/>
                        </div>
                        <div className="small-img-col">
                            <img src="img/products/f2.jpg" width="100%" className="small-img" alt=""/>
                        </div>
                        <div className="small-img-col">
                            <img src="img/products/f3.jpg" width="100%" className="small-img" alt=""/>
                        </div>
                        <div className="small-img-col">
                            <img src="img/products/f4.jpg" width="100%" className="small-img" alt="" />
                        </div>
                    </div>
                </div>

                <div className="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Mens Fashion T Shirt</h4>
                    <h2>$139.000</h2>
                    <select >
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option >Large</option>
                    </select>
                    <input type="number" value="1"/>
                    <button className="normal">Add to Cart</button>
                    <h4>Product Details</h4>
                    <span>
                        The Gildan ultra cotton T-shit is made from a substantial 6. oz per sq.yd, fabric constructed from 100% cotton, the classic fit preshrunk jersey knit provides unmatched comford with each wear.The Gildan ultra cotton T-shit is made from a substantial 6. oz per sq.yd, fabric constructed from 100% cotton, the classic fit preshrunk jersey knit provides unmatched comford with each wear.
                    </span>
                </div>
            </section>
        </section>
    )
}

export default function Sproduct () {

    var MainImg = document.getElementById("MainImg")
        var smallimg = document.getElementsByClassName("small-img")
        
        smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src;
        }
        smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src;
        }
    return(
        <>
        <Prodetails ></Prodetails>
        <Newarrval></Newarrval>
        <NewLester></NewLester>
        </>
    )
}