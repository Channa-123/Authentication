import {createUserWithEmailAndPassword } from "firebase/auth";
import React,{useState} from 'react';
import {auth} from "../../firebase";

const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");  

    const signUpFunc = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch ((error) => {
          console.log(error);
        });

    };
  return (
    <div className ="sign-in-container"> 
      <form onSubmit={signUpFunc}>
        <h1> Create Account </h1>
        <input type="email" placeholder ="Enter your email" value ={email} onInput={(e) => setEmail(e.target.value)}></input>
        <input type="password" placeholder="Enter your password" value={password} onInput={(e) => setPassword(e.target.value)}></input>
        <button type ="submit"> Sign Up </button>

      </form>
      
    </div>
  )
}

export default SignUp;
