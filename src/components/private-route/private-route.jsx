import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {PagePath, AuthorizationStatus} from '../../utils/functions';

const PrivateRoute = ({path, exact, authorizationStatus, render}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => authorizationStatus === AuthorizationStatus.NO_AUTH
        ? <Redirect to={PagePath.LOGIN} />
        : render(props)} />
  );
};

const mapStateToProps = ((state) => {
  return ({
    authorizationStatus: state.authorizationStatus,
  });
});

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
