import React from 'react';
import AuthForm from './AuthForm';
import Navbar from './Navbar';


function Login() {
  return (
    <>
    <Navbar/>
   <section className="sigup-container">
    <div className="signup-img-container">

    </div>
    <div className="signup-content-container">
    <div className="container2">
        <div className="content-wrapper">
            <h2>Sign In</h2>
            <p>Sign in with email and password</p>
           <AuthForm buttonName="Login"/>
        </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Login
