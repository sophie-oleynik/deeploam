import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../config";

// const googleAuthProvider = firebase.auth.GoogleAuthProvider();

const SignIn = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebase.auth().signInWithEmailAndPassword(email.value, password.value);
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
        <h1 className="text-center">Sign In</h1>
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
          {/* <button
            onClick={() => {
              firebase
                .auth()

                .signInWithPopup(googleAuthProvider)
                .then(function (result) {
                  var token = result.credential.accessToken;
                  var user = result.user;
                  debugger;
                  console.log(token);
                  console.log(user);
                })
                .catch(function (error) {
                  var errorCode = error.code;
                  var errorMessage = error.message;

                  console.log(error.code);
                  console.log(error.message);
                });
            }}
          >
            Sign in with Google
          </button> */}
        </form>
      </div>
    </>
  );
};

export default SignIn;
