import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login';


const root = createRoot(document.getElementById('root'));

const App = () => {
  return (
    <Auth0Provider
    domain="dev-33pk1j33awynd4dd.us.auth0.com"
    clientId="i7GnMhFPwV3SMSKlnnlJEWZOJANY0ZXs"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
    </Auth0Provider>
  );
};

export default App;
