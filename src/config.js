export const NODE_ENV = 'dev';

export const API_BASE_URL = (() => {
  if (NODE_ENV === 'production') {
    return 'https://api.miapp.com/api';
  } else if (NODE_ENV === 'staging') {
    return 'https://staging.api.miapp.com/api';
  } else {
    return 'http://localhost:8080/api';
  }
})();
