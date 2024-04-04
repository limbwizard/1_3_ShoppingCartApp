import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { RootState, AppDispatch } from '../../redux/store';
import Cart from '../cart/Cart';
import { UserRole } from '../../types/roles';
import { getAccessTokenFromUrl } from '../../utils/oauth';
import './home.scss';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const role = useSelector(
    (state: RootState) => state.auth.user?.role ?? UserRole.GUEST,
  );

  useEffect(() => {
    if (role === UserRole.CUSTOMER) {
      dispatch(fetchProducts());
    }
  }, [dispatch, role]);

  const renderContentBasedOnRole = () => {
    switch (role) {
      case UserRole.ADMIN:
        return (
          <div className="container text-center mt-5">
            <h1 className="mb-4">Admin Dashboard</h1>
            {/* Additional admin content */}
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
