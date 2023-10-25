import axios from 'axios';
import Storage from '../utils/localStorage';
import { Promise } from 'es6-promise';

const requestInterceptor = (config) => {
  const token = Storage.getLocalStorage('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  // 성공 메세지 전달받아서 사용
  config.message = 'messageTest';
  return config;
};

const responseInterceptor = (response) => {
  // request시 전달받은 메시지
  if (response.status === 200 && response.config.message) {
    console.log(`axios 응답 성공 메시지 추가 : ${response.config.message}`);
  }
  response.config.message = null;
  return response;
};

const responseInterceptorError = async (error, instance) => {
  const {
    config,
    response: { status },
  } = error;

  // 토큰 만료시 재발급, 기존 인스턴스를 그대로 사용하기 위해 플래그 retry 사용
  if (status === 303 && !config.retry) {
    const newToken = await getAccessToken();
    if (newToken) {
      config.headers['Authorization'] = `Bearer ${newToken}`;
      config.retry = true;
      return instance(config);
    }
  }
  const errorMessage = '에러메세지, error.response?.data?.errorMessage';
  // 성공 메세지 비워두기
  config.message = null;
  console.log(config.errorMessage);
  return Promise.reject(errorMessage);
};

const getAccessToken = async (instance) => {
  try {
    // 쿠키에 리프레시 토큰 존재하면 서버에서 확인 후 재발급
    const response = await instance.get(`http://localhost:5000/reToken`);
    const newToken = response.data.access_token;
    Storage.setLocalStorage('token', newToken);
    return newToken;
  } catch (error) {
    console.log('로그인 만료. 재로그인 해주세요');
    // logout 추가(쿠키제거, refreshToken 삭제, 로컬스토리지 AccessToken 삭제)
    return Promise.reject('토큰 재발급 실패');
  }
};

const createAxiosInstance = (timeoutSecond) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    timeout: timeoutSecond * 1000 || 100000000,
  });

  instance.interceptors.request.use(requestInterceptor);
  instance.interceptors.response.use(responseInterceptor, (error) =>
    responseInterceptorError(error, instance),
  );

  return instance;
};

export const api = {
  get: (path, timeoutSecond) => createAxiosInstance(timeoutSecond).get(path),
  post: (path, payload, timeoutSecond) =>
    createAxiosInstance(timeoutSecond).post(path, payload),
  delete: (path, timeoutSecond) =>
    createAxiosInstance(timeoutSecond).delete(path),
  put: (path, payload, timeoutSecond) =>
    createAxiosInstance(timeoutSecond).put(path, payload),
};
