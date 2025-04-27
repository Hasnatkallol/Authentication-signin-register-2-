import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    //  console.log(email, password,terms);

    setErrorMessage("");
    setSuccessMessage(false);

    const pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (pass.test(password) === false) {
      setErrorMessage("ALL error");
      return;
    }

    if (!terms) {
      setErrorMessage("Please Fullfill our terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setSuccessMessage(true);
        });
        
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl font-bold text-center">PLease Sign Up </h1>
          <div className="card-body space-y-1">
            <form onSubmit={handleSubmit} className="space-y-2">
              <label className="label">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  className="input mb-2"
                  placeholder="Email"
                />
              </div>
              <label className="label ">Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-40"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn absolute right-2"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div>
                <label className="label">
                  <input type="checkbox" name="terms" className="checkbox" />
                  Accepts terms and condition
                </label>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Sign Up
              </button>
              <p>
                ALready Have an account ? Please{" "}
                <Link className="text-blue-500" to={"/login"}>
                  Login
                </Link>{" "}
              </p>
            </form>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">Successfully Sign Up</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
