import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="card w-25 mx-auto mt-5 px-3 py-4">
        <h1 className="text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label className="mb-1" htmlFor="email" />
          <input
            required
            className="form-control mb-2"
            type="email"
            name="email"
            placeholder="Email"
          />
          <label className="mb-1" htmlFor="password" />
          <input
            required
            className="form-control mb-2"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
