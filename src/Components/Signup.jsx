import React from 'react';
import AuthForm from './AuthForm';
import Navbar from './Navbar';


function Signup() {
  return (
    <>
    <Navbar/>
   <section className="sigup-container">
    <div className="signup-img-container">

    </div>
    <div className="signup-content-container">
    <div className="container2">
        <div className="content-wrapper">
            <h2>Sign up</h2>
            <p>Create a new account with email and password</p>
            <br/>
            <p className='note'>* Password should be at least 6 characters</p>
            <br/>
            <AuthForm buttonName="Sign Up"/>
        </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Signup
