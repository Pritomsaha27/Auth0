import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Login() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      // Send the user data to your backend to store in MongoDB
      const saveUser = async () => {
        try {
          await axios.post('http://localhost:5000/api/save-user', {
            name: user.name,
            email: user.email,
            auth0Id: user.sub,  // Auth0 user ID
          });
        } catch (error) {
          console.error('Error saving user:', error);
        }
      };
      saveUser();
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      {isAuthenticated && (
        <h1>Welcome, {user.name}</h1>
      )}
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
  );
}

export default Login