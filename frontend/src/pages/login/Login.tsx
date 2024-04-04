// import React from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setAuthUser } from '../../redux/authSlice';
// import { loginWithGoogle } from '../../services/authService';

// const Login: React.FC = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState('');

//   const login = useGoogleLogin({
//     onSuccess: async (tokenResponse) => {
//       setLoading(true);
//       setError('');

//       try {
//         const userData = await loginWithGoogle(tokenResponse);
//         dispatch(setAuthUser(userData));
//         navigate('/dashboard');
//       } catch (error) {
//         setError('Login failed. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     },
//     onError: (errorResponse) => {
//       console.error('Login failed:', errorResponse);
//       setError('Login failed. Please try again.');
//     },
//   });

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <button
//         onClick={() => login()}
//         disabled={loading}
//         className="login-button"
//       >
//         {loading ? 'Logging in...' : 'Login with Google'}
//       </button>
//     </div>
//   );
// };

// export default Login;
import React from 'react';
import { oauthSignIn } from '../../services/authService';

const Login: React.FC = () => {
  const handleLogin = () => {
    oauthSignIn();
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
