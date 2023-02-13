import React, {useEffect, createContext, useState} from 'react';
import './Components/style.css';
import Meal from './Components/Meal';
import Recipe from './Components/Recipe';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import app from "./Components/firebaseConfig";
import {getAuth, onAuthStateChanged} from 'firebase/auth';

export const UserContext=createContext({});

function App() {
  const auth=getAuth(app);
  const[authenticatedUser,setAuthenticatedUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
      
        setAuthenticatedUser(user);
      }else{
        setAuthenticatedUser(null);
      }
    })
  },[])

  return (
   <UserContext.Provider value={authenticatedUser}>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contactus" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route  path="/Meal" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
      
    </UserContext.Provider>
  )
}

export default App;