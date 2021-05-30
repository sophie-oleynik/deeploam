import React from "react";
import { Redirect, Link } from "react-router-dom";
import Background from "../assets/images/bg-01.jpg";
import Icon from "../components/common/Icon";
import Logo from "../components/common/Logo";
import AuthStore from "../store/modules/Auth";
import { observer } from "mobx-react-lite"; 

const SignUp = observer(() => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = e.target.elements;
    AuthStore.signUp({ name: name.value, email: email.value, password: password.value })
      .catch(err => alert("Користувач вже існує"));
  };

  if (AuthStore.user) {
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
                type="name"
                name="name"
                placeholder="Ваше Ім'я"
              />
              <Icon icon="user" width="1.5rem" height="3rem" />
            </div>
            <div className="wrapper-input">
              <input
                required
                className="form-control mb-2"
                type="email"
                name="email"
                placeholder="Email"
              />
              <Icon icon="mail" width="1.5rem" height="3rem" />
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
              <Link className="txt" to="/signIn">
                Вже маєш створений акаунт?
              </Link>
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
});

export default SignUp;
