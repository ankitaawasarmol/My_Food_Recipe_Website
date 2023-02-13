import React, { useRef, useContext } from 'react';
import {FaTimes,FaBars} from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import { UserContext } from '../App';

function Navbar2() {
    const navigate = useNavigate();

    const clickHandler = (e) => {
      e.preventDefault();
      navigate('/login');
    }

    const toHome=(e)=>{
      e.preventDefault();
      navigate('/');
    }

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    };


    const user = useContext(UserContext);



  return (
    <div className='navbar_fixed'>
    <div className="container1_navbar2">
      <h onClick={toHome}>Ankita<span>Recipes</span></h>
      <nav ref={navRef}>
      <div className="links_navbar2">
        <Link to="/" className="home_navbar2">Log Out</Link>
        {/* <Link to="/Meal" className="recipes"><li>Recipes</li></Link> */}
        {/* <Link to="/About" className="about"><li>About Us</li></Link>
        <Link to="/Contactus" className="contactus"><li>Contact Us</li></Link> */}
        </div>
        {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
        </button> */}
      </nav>
        {/* <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button> */}
    </div>
    </div>
  )
}

export default Navbar2
