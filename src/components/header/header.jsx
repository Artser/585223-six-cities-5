import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthorizationStatus, PagePath } from "../../utils/functions";
import { connect } from "react-redux";

export const Header = (props) => {
  const { authorizationStatus, authInfo } = props;
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/" className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <span className="header__nav-link header__nav-link--profile">
                <div
                  className="header__avatar-wrapper user__avatar-wrapper"
                >
                </div>
                {
                  authorizationStatus === AuthorizationStatus.AUTH ?
                    <Link className="header__user-name user__name" to={PagePath.FAVOURITE}>
                      {authInfo ? authInfo.email : ``}
                    </Link>
                    : <Link className="header__login" to={PagePath.LOGIN}>Sign in</Link>

                }
              </span>
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
