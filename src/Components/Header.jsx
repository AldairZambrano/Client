import { useState } from 'react'
import { Link } from 'react-router-dom'
// importaicones de firebase 
"use client";
import { Button, Navbar } from "keep-react";
import { Heart, MagnifyingGlass, ShoppingCart, User,Image } from "phosphor-react";


// eslint-disable-next-line react/prop-types
const Header = ({correoUsuario}) => {

  const [activeLink, setActiveLink] = useState(null)

return (


    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Link to='./'><Navbar.Link linkName="Home"/></Link>
          <Link to='./shop'><Navbar.Link linkName="Shop"/></Link>
          <Link to='./about'><Navbar.Link linkName="About"/></Link>
          <Link to='./Contact'><Navbar.Link linkName={correoUsuario}/></Link>
        </Navbar.Container>
        <Navbar.Brand>
          <Image
            src="/images/keep.svg"
            alt="keep"
            width="100"
            height="40"
          />
        </Navbar.Brand>

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
          <Link className='nav-link' to='./' onClick={()=> setActiveLink('./')}
            style={{borderBottom: activeLink == './' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="Home"/></Link>
            <Link className='nav-link' to='./shop' onClick={() => setActiveLink('./shop')}
            style={{borderBottom: activeLink == './shop' ? '2px solid #088178' : 'none'}}> <Navbar.Link linkName="shop"/></Link>
            <Link className='nav-link' to='./about' onClick={() => setActiveLink('./about')}
            style={{borderBottom: activeLink == './about' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="about"/></Link>
            <Link to='./Contact' className='nav-link' onClick={() => setActiveLink('./Concact')}
            style={{borderBottom: activeLink == './Concact' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="Contact" /></Link>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link
              icon={<MagnifyingGlass size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
            />
           <h1></h1>
            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>
          <Link to='./cart'>
          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-metal-600">Cart $0.00</span>
          </Button>
          </Link>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
)
}

export default Header

//  <nav className="navbar bg-body-tertiary fixed-top" id='header'>
// <div className="container-fluid">
//   <a className="navbar-brand logo" href="#">A.S.Mis2start</a>
//   <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//     <div className="offcanvas-header">
//       <h5 className="offcanvas-title" id="offcanvasNavbarLabel">A.S.M</h5>
//       <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//     </div>
//     <div className="offcanvas-body">
//       <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id='navbar'>
//         <li className="nav-item">
//             <Link className='nav-link' to='./' onClick={()=> setActiveLink('./')}
//             style={{borderBottom: activeLink == './' ? '2px solid #088178' : 'none'}}>
//           Home
//           </Link>
//         </li>
//         <li className="nav-item">
//             <Link className='nav-link' to='./shop' onClick={() => setActiveLink('./shop')}
//             style={{borderBottom: activeLink == './shop' ? '2px solid #088178' : 'none'}}>
//               Shop
//           </Link>
//         </li>
//         <li className="nav-item">
//             <Link className='nav-link' to='./about' onClick={() => setActiveLink('./about')}
//             style={{borderBottom: activeLink == './about' ? '2px solid #088178' : 'none'}}>
//            About
//           </Link>
//         </li>
//         <li className="nav-item">
//             <Link to='./Contact' className='nav-link' onClick={() => setActiveLink('./Concact')}
//             style={{borderBottom: activeLink == './Concact' ? '2px solid #088178' : 'none'}}>
//               Concact
//           </Link>
//         </li>
//         <li className="nav-item">
//         <div>
//             <Link className='nav-link' to='./Cart' onClick={() => setActiveLink('./Cart')}
//             style={{borderBottom: activeLink == './Cart' ? '2px solid #088178' : 'none'}}>
//             <i className="far fa-shopping-bag "></i>
//            <a style={{marginLeft:'8px'}}>Cart</a>
//           </Link>
//           </div>
//         </li>
//         <li className="nav-item">
//         <div>
//         <li className='nav-item'>
//            <a className="nav-item"style={{marginLeft:'8px', cursor:'pointer'}} onClick={()=> signOut(auth)}>Cerrar sesion {correoUsuario}</a>
//            </li>
//           </div>
//         </li>
//       </ul>
//       <form className="d-flex mt-3" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//     </div>
//     </div>
//   </div>
// </nav>

