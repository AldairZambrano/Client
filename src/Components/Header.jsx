import { useState } from 'react'
import { Link } from 'react-router-dom'
// importaicones de firebase 

import appFirebase from '../Credenciales'
import {getAuth, signOut} from 'firebase/auth'

const auth = getAuth(appFirebase)


// eslint-disable-next-line react/prop-types
const Header = ({ correoUsuario }) => {

  const [activeLink, setActiveLink] = useState(null)

return (
<nav className="navbar bg-body-tertiary fixed-top" id='header'>
<div className="container-fluid">
  <a className="navbar-brand logo" href="#">A.S.Mis2start</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">A.S.M</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id='navbar'>
        <li className="nav-item">
            <Link className='nav-link' to='./' onClick={()=> setActiveLink('./')}
            style={{borderBottom: activeLink == './' ? '2px solid #088178' : 'none'}}>
          Home
          </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to='./shop' onClick={() => setActiveLink('./shop')}
            style={{borderBottom: activeLink == './shop' ? '2px solid #088178' : 'none'}}>
              Shop
          </Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link' to='./about' onClick={() => setActiveLink('./about')}
            style={{borderBottom: activeLink == './about' ? '2px solid #088178' : 'none'}}>
           About
          </Link>
        </li>
        <li className="nav-item">
            <Link to='./Contact' className='nav-link' onClick={() => setActiveLink('./Concact')}
            style={{borderBottom: activeLink == './Concact' ? '2px solid #088178' : 'none'}}>
              Concact
          </Link>
        </li>
        <li className="nav-item">
        <div>
            <Link className='nav-link' to='./Cart' onClick={() => setActiveLink('./Cart')}
            style={{borderBottom: activeLink == './Cart' ? '2px solid #088178' : 'none'}}>
            <i className="far fa-shopping-bag "></i>
           <a style={{marginLeft:'8px'}}>Cart</a>
          </Link>
          </div>
        </li>
        <li className="nav-item">
        <div>
        <li className='nav-item'>
           <a className="nav-item"style={{marginLeft:'8px', cursor:'pointer'}} onClick={()=> signOut(auth)}>Cerrar sesion {correoUsuario}</a>
           </li>
          </div>
        </li>
      </ul>
      <form className="d-flex mt-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>
    </div>
  </div>
  esto es <p style={{color:'black'}}>{correoUsuario}</p>
</nav>
)
}

export default Header
