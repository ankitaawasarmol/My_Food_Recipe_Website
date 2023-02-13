import React, { useRef, useContext, useState, useEffect } from 'react';
import {FaRegTimesCircle,FaBars} from "react-icons/fa";
import { useNavigate,Link } from 'react-router-dom';
import { UserContext } from '../App';


function Navbar() {

  // const[sticky, setSticky]=useState(true);

  // useEffect(()=>{
  //   const handleScroll = () =>{
  //     setSticky(window.scrollY > 200)
  //   }
  //   window.addEventListener('scroll',handleScroll)
  //   return()=>window.removeEventListener("scroll",handleScroll);
  // })

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
    <div className="container1">
      <h onClick={toHome}>Ankita<span>Recipes</span></h>
      <nav className="Nav0" ref={navRef} >
      <ul className="links">
        <Link to="/" className="home"><li>Home</li></Link>
        {/* <Link to="/Meal" className="recipes"><li>Recipes</li></Link> */}
        <Link to="/About" className="about"><li>About Us</li></Link>
        <Link to="/Contactus" className="contactus"><li>Contact Us</li></Link>
        <Link to="/Login" className="signin"><li>Login</li></Link>
        <Link to="/Signup" className="signin"><li>New User ?</li></Link>
        
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaRegTimesCircle/>
        </button>
      </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
        </button>
    </div>
    </div>
  )
}

export default Navbar
