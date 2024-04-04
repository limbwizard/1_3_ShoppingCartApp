// src/hooks/useAuth.ts
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthUser, clearAuthUser } from '../redux/authSlice';
import * as authService from '../services/authService';
import { UserRole } from '../types/roles'; // Import the UserRole enum

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signIn = useCallback(
    async (response: any) => {
      // Consider typing the response more specifically if possible
      setLoading(true);
      try {
        const { sub, email, name, picture } = response;
        const user = {
          id: sub,
          email,
          name,
          avatar: picture,
          role: UserRole.CUSTOMER, // Static role assignment
        };
        dispatch(setAuthUser(user));
      } catch (error) {
        console.error('Sign in failed:', error);
        // Here you could update state to reflect the error to the user
      } finally {
        setLoading(false);
      }
    },
    [dispatch],
  );

  const signOut = useCallback(() => {
    authService.signOut();
    dispatch(clearAuthUser());
  }, [dispatch]);

  return { signIn, signOut, loading };
};
