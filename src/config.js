export const NODE_ENV = 'dev';

export const API_BASE_URL = (() => {
  if (NODE_ENV === 'production') {
    return 'https://gs8af4pd2b.execute-api.us-east-2.amazonaws.com/dev/api';
  } else if (NODE_ENV === 'dev') {
    return 'https://gs8af4pd2b.execute-api.us-east-2.amazonaws.com/dev/api';
  } else {
    return 'http://localhost:8080/api';
  }
})();
