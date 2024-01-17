const END_POINT = {
  USER: {
    SIGN_UP: '/api/users/register',
  },
  AUTH: {
    AUTH_EMAIL: '/api/auth/auth-email',
    LOGIN_KAKAO: (code) => `/api/auth/kakao/oauth?code=${code}`,
    LOGIN_EMAIL: `/api/auth/login`,
  },
};

const QUERY = {
  END_POINT,
};

export default QUERY;
