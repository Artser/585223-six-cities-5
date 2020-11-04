import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";
// import {AuthorizationStatus, PagePath} from "../../utils/functions";
// import {Redirect} from "react-router-dom";


const withLogin = (WrappedLogin) => {
  return class WithLogin extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };
      this._loginRef = createRef();
      this._passwordRef = createRef();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
      // this.props.login(this._loginRef.current.value, this._passwordRef.current.value);
    }

    render() {
    /*   if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
        return < Redirect to={PagePath.MAIN} />;
      } */
      return <WrappedLogin
        {...this.props}
        email={this.state.email}
        password={this.state.password}
        loginRef={this._loginRef}
        passwordRef={this._passwordRef}
        handleSubmit={this.handleSubmit}

      />;
    }
  };
};

withLogin.propTypes = {
  login: PropTypes.object,
  authorizationStatus: PropTypes.string,
};

export default withLogin;
