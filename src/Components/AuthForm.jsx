import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

function AuthForm({buttonName}) {
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[username, setUsername]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const auth=getAuth(app);
        
        if(buttonName === 'Login'){
            signInWithEmailAndPassword(auth,email,password)
            .then(()=>{
                navigate('/Meal');
            })
            .catch((err)=>console.log(err));

        }else{
            createUserWithEmailAndPassword(auth, email, password)
             .then((userCredentials)=>{
            userCredentials.user.displayName=username;

            navigate('/Meal');
        })
        .catch((err)=>{
            console.log(err);
        })
        }

        
    }
  return (
    <div>
       <form onSubmit={handleSubmit}>

                {buttonName === "Sign Up" && (
                    <div className="form-group">
                    <label>Username : </label>
                    <input
                     type="text" 
                     className="form-input"
                     placeholder='Enter your username' 
                     value={username}
                     onChange={(event)=>setUsername(event.target.value)}
                     />
                </div>
                )}
                    <br/>
                <div className="form-group">
                <label>Email : </label>
                    <input
                     type="email" 
                     className="form-input"
                     placeholder='Enter your email'
                     value={email}
                     onChange={(event)=>setEmail(event.target.value)}
                     />
                </div>
                    <br/>
                <div className="form-group">
                <label>Password : </label>
                    <input 
                     type="password"
                     className="form-input"
                     placeholder='Enter your password'
                     value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                     />
                </div>

                <div className="form-group">
               
                    <input 
                     type="submit"
                     className="form-btn"
                     value={buttonName}
                      />
                </div>
            </form>
    </div>
  )
}

export default AuthForm
