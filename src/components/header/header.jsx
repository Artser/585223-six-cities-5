import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../utils/functions";
import {connect} from "react-redux";

export const Header = (props) => {
  const {authorizationStatus, authInfo} = props;
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <a className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link to="/login" className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">{authorizationStatus === AuthorizationStatus.AUTH ? authInfo.email : `Sign In`}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;

};
Header.propTypes = {

  authorizationStatus: PropTypes.string,
  authInfo: PropTypes.object,

};
const mapStateToProps = (state) => {


  return {
    authorizationStatus: state.authorizationStatus,
    authInfo: state.authInfo,

  };
};
export default connect(mapStateToProps)(Header);
