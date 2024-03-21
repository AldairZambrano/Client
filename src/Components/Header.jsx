import { useState} from 'react'
import { Link } from 'react-router-dom'
// importaicones de firebase 
"use client";
import { Button, Navbar } from "keep-react";
import { MagnifyingGlass, ShoppingCart, User,Image } from "phosphor-react";

// firebase
import appFirebase from '../Credenciales'

import {getAuth, signOut} from 'firebase/auth'
import { Modal } from './BotonLog';
const auth = getAuth(appFirebase)

// eslint-disable-next-line react/prop-types
const Header = ({correoUsuario}) => {
  const [activeLink, setActiveLink] = useState(null)

  const [liked, setLiked] = useState(false)


return (


    <Navbar fluid={true} >
      <Navbar.Container className="flex items-center justify-between ">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Link to='./'  onClick={()=> setActiveLink('./')}
            style={{borderBottom: activeLink == './' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="Home" /></Link>
          <Link to='./shop' onClick={() => setActiveLink('./shop')}
            style={{borderBottom: activeLink == './shop' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="Shop"/></Link>
          <Link to='./about' onClick={() => setActiveLink('./about')}
            style={{borderBottom: activeLink == './about' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="About"/></Link>
          <Link to='./Contact' onClick={() => setActiveLink('./Concact')}
            style={{borderBottom: activeLink == './Concact' ? '2px solid #088178' : 'none'}}><Navbar.Link linkName="Contact Us"/></Link>
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
            <Link to='./' className='nav-link' onClick={()=> signOut(auth)}><Navbar.Link linkName="Cerrar sesion"/></Link>       
            <span>{correoUsuario}</span>
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
            <Modal className="nav-item" onclick={()=> signOut(auth)} nameusu={correoUsuario}></Modal>
          <button onClick={() => setLiked(!liked)}>
         {liked ? <i className="bi bi-heart"></i>: <i className="bi bi-heart-fill"></i>}
        </button>
          </Navbar.Container>
          <Link to='./cart'>
          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-metal-600">Cart ${}</span>
          </Button>
          </Link>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
)
}

export default Header
