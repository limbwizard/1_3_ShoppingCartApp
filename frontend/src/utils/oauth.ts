// utils/oauth.ts
export const getAccessTokenFromUrl = () => {
  const hash = window.location.hash;
  const params = new URLSearchParams(hash.substr(1)); // Remove '#'
  const accessToken = params.get('access_token');

  // Clear the access token from the URL
  window.history.pushState(
    {},
    document.title,
    window.location.pathname + window.location.search,
  );

  return accessToken;
};
