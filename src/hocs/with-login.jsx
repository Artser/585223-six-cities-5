import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withLogin = (WrappedLogin) => {
  class WithLogin extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
      };
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(evt) {
      this.setState({email: evt.target.value});

    }


    handlePassword(evt) {
      this.setState({password: evt.target.value});

    }

    render() {

      return <WrappedLogin
        {...this.props}
        email={this.state.email}
        password={this.state.password}
        handlePassword={this.handlePassword}
        handleEmail={this.handleEmail}

      />;
    }


  }

  WithLogin.propTypes = {
    login: PropTypes.func,
    authorizationStatus: PropTypes.string,
  };
  return WithLogin;
};


export default withLogin;
