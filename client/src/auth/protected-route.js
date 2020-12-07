import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import { Dimmer, Loader } from 'semantic-ui-react';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Dimmer active><Loader size="huge">Loading...</Loader></Dimmer>,
    })}
    {...args}
  />
);

export default ProtectedRoute;
