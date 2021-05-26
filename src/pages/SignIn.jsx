import React from "react";
import { Redirect } from "react-router-dom";
import AuthStore from "../store/modules/Auth";
import Background from "../assets/images/bg-01.jpg";
import Icon from "../components/common/Icon";
import Logo from "../components/common/Logo";

// const googleAuthProvider = firebase.auth.GoogleAuthProvider();

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      AuthStore.signIn({ email: email.value, password: password.value });
    } catch (error) {
      alert(error);
    }
  };

  if (AuthStore.currentUser) {
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
          <h1 className="text-center">Авторизація</h1>
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
                Хочеш створити акаунт?
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

export default SignIn;
