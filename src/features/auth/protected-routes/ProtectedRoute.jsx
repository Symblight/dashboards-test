import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { paths } from "pages/paths";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  authenticated,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (authenticated) {
          return Component ? <Component {...props} /> : render(props);
        }
        return (
          <Redirect
            to={{
              pathname: paths.login(),
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const { authenticated } = state.auth;
  return {
    authenticated,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
