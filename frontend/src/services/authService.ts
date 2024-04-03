// src/services/authService.ts
import axios from 'axios';

const API_URL = 'https://your-api-url.com/auth';

interface SignInResponse {
  user: any; // Replace `any` with your user type
  token: string;
}

interface User {
  // Define the user object structure based on your backend
  id: string;
  username: string;
  // Add other user properties
}

// Function to sign in
const signIn = async (username: string, password: string): Promise<User> => {
  const response = await axios.post<SignInResponse>(`${API_URL}/signin`, {
    username,
    password,
  });
  const { user, token } = response.data;

  // Save the token in local storage or cookies as per your preference
  localStorage.setItem('authToken', token);

  return user;
};

// Function to sign out
const signOut = (): void => {
  // Remove the token from local storage or cookies
  localStorage.removeItem('authToken');
};

// Function to check authentication status
const checkAuth = async (): Promise<boolean> => {
  const token = localStorage.getItem('authToken');
  if (!token) return false;

  try {
    // Optionally, verify the token's validity with your backend
    await axios.get(`${API_URL}/verifyToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.error('Token verification failed', error);
    return false;
  }
};

// Function to get the current user
const getCurrentUser = async (): Promise<User> => {
  const token = localStorage.getItem('authToken');
  const response = await axios.get<User>(`${API_URL}/currentUser`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export { signIn, signOut, checkAuth, getCurrentUser };
