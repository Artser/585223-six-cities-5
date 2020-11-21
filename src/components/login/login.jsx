
import React from "react";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data";
import PropTypes from 'prop-types';
import {AuthorizationStatus, PagePath} from "../../utils/functions";
import {Redirect} from "react-router-dom";
import {Header} from "../header/header";

const Login = ({email, password, login, handlePassword, handleEmail, authorizationStatus, authInfo}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(email, password);

  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return < Redirect to={PagePath.MAIN} />;
  }
  return (
    <div className="page page--gray page--login">
      <Header
        authorizationStatus={authorizationStatus}
        authInfo={authInfo}
      />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input onChange={handleEmail} className="login__input form__input" type="email" value={email} name="email" placeholder="Email" required="" />


              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input onChange={handlePassword} className="login__input form__input" type="password" value={password} name="password" placeholder="Password" required="" />

              </div>
              <button onClick={handleSubmit} className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => {

    dispatch(Operation.login(email, password)
    );
  }
});

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  login: PropTypes.func,
  handlePassword: PropTypes.func,
  handleEmail: PropTypes.func,
  authorizationStatus: PropTypes.string,
  authInfo: PropTypes.object,

};
export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
