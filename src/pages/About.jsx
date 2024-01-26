import Hero from "../Components/HeroAbaout"
import Feature from '../Components/Feature'
import Newlester from '../Components/Newsletter'
const Abouts = () => {
  return(
    <section id="abaout-head" className="section-p1">
        <img src="" alt="" />
        <div>
          <h2>Who we are ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugiat quae similique consequuntur possimus quidem iure fuga tempore fugit exercitationem voluptate sed amet nesciunt, laudantium qui doloremque eaque soluta est!</p>
          <abbr title="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione corrupti, maxime aperiam illum odio deserunt minima itaque voluptas necessitatibus suscipit ducimus nihil sapiente. Voluptatem, sint! Laudantium ratione sapiente sit doloribus.</abbr>
          <br></br>
          <br></br>
        </div>
    </section>
  )
}

const AboutApp = () => {
  return(
    <section id="about-app" className="section-p1">
    <h1>Download Our <a href="#">App</a></h1>
    <div className="video">
        <video autoPlay muted  loop src="img/about/1.mp4"></video>
    </div>
    </section>
  )
}
export default function About() {
  return (
    <>
    <Hero></Hero>
    <Abouts></Abouts>
    <AboutApp></AboutApp>
    <Feature></Feature>
    <Newlester></Newlester>

    </>
  )
}
