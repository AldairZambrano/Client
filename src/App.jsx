import appFirebase from '../src/Credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

// importo firebase
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignIn from './pages/Signin';
import SignUp from './pages/SignOut';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState } from 'react';

const App = () => {

  const [usuario, setUsuario] = useState(null)  

  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if(usuarioFirebase){
      console.log("El usuario ha iniciado sesion")
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  
  return (
    <>
    {usuario ? <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Sign-in" element={<SignIn correoUsuario={usuario.email}/>} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router> : <SignIn></SignIn>}
    </>
  );
};

export default App;