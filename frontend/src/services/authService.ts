// authService.ts
import { UserRole } from '../types/roles';

interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  role: UserRole;
}

export const oauthSignIn = () => {
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  const params = {
    client_id:
      '851983889381-ba4jagcfvse1hnd4q1pq2hnio82siae3.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3000',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    include_granted_scopes: 'true',
    state: 'pass-through value',
  };

  const urlParams = new URLSearchParams(params);
  const authUrl = `${oauth2Endpoint}?${urlParams.toString()}`;
  window.location.href = authUrl;
};

export const loginWithGoogle = async (tokenResponse: any): Promise<User> => {
  if (tokenResponse.access_token) {
    try {
      // Use the access token to retrieve user information from Google's API
      const response = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        },
      );

      if (response.ok) {
        const userData = await response.json();

        // Map the user data from Google's response to the User interface
        const user: User = {
          id: userData.sub,
          email: userData.email,
          name: userData.name,
          avatar: userData.picture,
          role: UserRole.CUSTOMER, // Assign the appropriate role based on your logic
        };

        return user;
      } else {
        throw new Error('Failed to retrieve user information from Google');
      }
    } catch (error) {
      console.error('Error retrieving user information:', error);
      throw new Error('Failed to retrieve user information from Google');
    }
  } else {
    throw new Error('Login failed: Access token not found');
  }
};

export const signOut = async (): Promise<void> => {
  try {
    // Perform any necessary sign-out logic, such as clearing user data from local storage or revoking tokens
    localStorage.removeItem('user');
    // You can also make an API call to your backend to invalidate the user session if needed
    // await axios.post('/api/logout');
  } catch (error) {
    console.error('Error signing out:', error);
    throw new Error('Failed to sign out');
  }
};
