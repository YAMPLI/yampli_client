const END_POINT = {
  USER: {
    SIGN_UP: '/api/users/register',
    LOGIN_KAKAO: (code) => `/api/auth/kakao/oauth?code=${code}`,
  },
  AUTH: {
    AUTH_EMAIL: '/api/auth/auth-email',
  },
};

const QUERY = {
  END_POINT,
};

export default QUERY;
