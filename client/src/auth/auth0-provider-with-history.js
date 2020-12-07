import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const callBackUrl = process.env.REACT_APP_AUTH0_CALL_BACK_URL ;
  //const audience = process.env.REACT_APP_AUTH0_AUDIENCE || `http://localhost:5000`;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={callBackUrl}
      onRedirectCallback={onRedirectCallback}
      
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
