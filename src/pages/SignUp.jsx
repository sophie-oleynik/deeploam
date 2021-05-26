import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../firebase";
import Background from "../assets/images/bg-01.jpg";
import Icon from "../components/common/Icon";
import Logo from "../components/common/Logo";

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

  let backgroundStyle = {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${Background})`,
  };

  return (
    <>
      <div className="container-login" style={backgroundStyle}>
        <div className="wrap-login">
          <div className="d-flex justify-content-center mb-2">
            <Logo />
          </div>
          <h1 className="text-center">Реєстрація</h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <div className="wrapper-input">
              <input
                required
                className="form-control mb-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <Icon icon="user" width="1.5rem" height="3rem" />
            </div>

            <div className="wrapper-input">
              <input
                required
                className="form-control mb-2"
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <Icon icon="password" width="1.5rem" height="3rem" />
            </div>
            <div className="login-text">
              <a class="txt" href="#">
                Вже маєш створений акаунт?
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success mt-2 px-5">
                Підтвердити
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
