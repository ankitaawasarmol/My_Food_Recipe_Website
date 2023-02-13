import React from 'react';
import Footer from './Footer';
import Navbar from "./Navbar";

function Home() {
  return (
    <>
    <div className='bg'>
    <Navbar/>
    <div className='home-content'>
    <h3 className='heading'>Pellentsque un neque haitant morbi.</h3>
    <br/>
    <p className='paragraph'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci</p>
    <p className='paragraph'>Neque porro quisquam est qui dolorem ipsum quia dolor</p>
    <br/>
    <h3 className='home_navbar2_login'>To see all recipes please login ...</h3>
    </div>
    </div>
    </>
  )
}

export default Home
