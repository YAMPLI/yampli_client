const CLIENT_ID = process.env.REACT_APP_KAKAO_API;
// const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const getPortNumber = () => {
  const isSecondPort = window.location.port === '8080';
  return isSecondPort
    ? 'http://example1.local:8080/kakao/oauth'
    : 'https://43bf-106-241-78-77.ngrok-free.app/kakao/oauth';
};
// const REDIRECT_URI = `http://localhost:${getPortNumber()}/kakao/oauth`;
// const REDIRECT_URI = 'http://example1.local:8080/kakao/oauth';
const REDIRECT_URI = getPortNumber();

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
