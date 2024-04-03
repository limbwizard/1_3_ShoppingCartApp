// src/hooks/useAuth.ts
import { useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthUser, clearAuthUser } from '../redux/authSlice';
import * as authService from '../services/authService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signIn = useCallback(
    async (username: string, password: string) => {
      setLoading(true);
      try {
        const user = await authService.signIn(username, password);
        dispatch(setAuthUser(user));
      } catch (error) {
        console.error('Sign in failed:', error);
        // Optionally, handle the error (e.g., show a notification)
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

  // Example of an auth check at the start
  useEffect(() => {
    const checkAuthStatus = async () => {
      setLoading(true);
      try {
        const isAuthenticated = await authService.checkAuth();
        if (isAuthenticated) {
          const user = await authService.getCurrentUser();
          dispatch(setAuthUser(user));
        } else {
          dispatch(clearAuthUser());
        }
      } catch (error) {
        console.error('Checking auth failed', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  return { signIn, signOut, loading };
};
