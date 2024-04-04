// utils/oauth.ts
export const getAccessTokenFromUrl = () => {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.substr(1)); // Remove '#'
  return params.get('access_token');
};
