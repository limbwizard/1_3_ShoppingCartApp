import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { setAuthUser, clearAuthUser } from '../../redux/authSlice';
import { RootState, AppDispatch } from '../../redux/store';
import Cart from '../cart/Cart';
import { UserRole } from '../../types/roles';
import { getAccessTokenFromUrl } from '../../utils/oauth';
import { ADMIN_USERS } from '../../services/authService'; // Make sure to export ADMIN_USERS
import './home.scss';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const role = useSelector(
    (state: RootState) => state.auth.user?.role ?? UserRole.GUEST,
  );

  useEffect(() => {
    const accessToken = getAccessTokenFromUrl();
    if (accessToken) {
      const fetchUserInfo = async () => {
        try {
          const response = await fetch(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          );

          if (response.ok) {
            const userData = await response.json();
            const userRole = ADMIN_USERS.includes(userData.email)
              ? UserRole.ADMIN
              : UserRole.CUSTOMER;

            dispatch(
              setAuthUser({
                id: userData.sub,
                email: userData.email,
                name: userData.name,
                avatar: userData.picture,
                role: userRole, // Assign role based on email check
              }),
            );
          } else {
            console.error('Failed to fetch user info');
            dispatch(clearAuthUser());
          }
        } catch (error) {
          console.error('Error fetching user info:', error);
          dispatch(clearAuthUser());
        }
      };

      fetchUserInfo();
    }
  }, [dispatch]);

  useEffect(() => {
    if (role !== UserRole.GUEST) {
      dispatch(fetchProducts());
    }
  }, [dispatch, role]);

  const renderContentBasedOnRole = () => {
    switch (role) {
      case UserRole.ADMIN:
        return (
          <div className="container text-center mt-5">
            <h1 className="mb-4">Admin Dashboard</h1>
          </div>
        );
      case UserRole.CUSTOMER:
        return (
          <div className="container mt-5">
            <h1 className="text-center mb-4">Welcome to the Shop</h1>
            <Cart />
          </div>
        );
      default:
        return (
          <div className="container text-center mt-5">
            <h1>Welcome! Please log in.</h1>
          </div>
        );
    }
  };

  return <div className="home-page">{renderContentBasedOnRole()}</div>;
};

export default Home;
