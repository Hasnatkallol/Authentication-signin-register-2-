import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
import { auth } from "../firebase.init";
import { Link } from "react-router";
import { useRef, useState } from "react";

const Login = () => {
 
  const [ findError, setFindError ] = useState("")
  const [successMessage, setSuccessMessage] = useState(false);
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    setSuccessMessage(false);

    signInWithEmailAndPassword(auth,email,password)
    .then((result) => {
   
      const user = result.user;
      console.log(user);
       if(!user.emailVerified){
        alert('Please verified email')
       }
       else{
        setSuccessMessage(true);
       }
      
    })
    .catch((error) => {
   
      console.log(error)
      setFindError(error.message)
    });
  };

  const handleForgetPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    setFindError('');

    // send password reset email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('A password reset email is sent. Please check your email.')
        })
        .catch(error => {
            setFindError(error.message);
        })
}



  return (
    <div className="hero bg-base-200 min-h-screen">
   
     
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin} className="form">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input mb-2"
                placeholder="Email"
                ref={emailRef}
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div onClick={handleForgetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p>If you have no account please <Link className="text-blue-600" to={'/signup'}>Sign Up</Link> </p>
            
            </form>
              
                {
                     findError && <p className="text-red-500">{findError}</p>
                }
             
                  {
                  successMessage && 
                <p className="text-green-500">Successfully Sign Up</p>
                }
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Login;
