import axios from 'axios';
import Storage from '../utils/localStorage';
import { Promise } from 'es6-promise';
import {
  showAlertWithButton,
  showAlertWithoutButton,
} from '../utils/alertUtils';

const parseMessage = (message, delimiter = '|') => {
  console.log(message);
  const [title, subTitle] = message.split(delimiter);

  return { title, subTitle: subTitle || '' };
};

const requestInterceptor = (config) => {
  const token = Storage.getLocalStorage('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  console.log(config.customMessage);
  config.message =
    typeof config.customMessage === 'string' &&
    config.customMessage.includes('|')
      ? parseMessage(config.customMessage)
      : config.customMessage;

  if (config.customOnSuccess) {
    config.onSuccess = config.customOnSuccess;
  }

  // 성공 메세지 전달받아서 사용
  return config;
};

const responseInterceptor = (response) => {
  const {
    config,
    status,
    data: { message },
  } = response;
  let onSuccess;
  console.log(`responseInterceptor 시작`, response);

  // 상태 코드가 200일 때만 메시지를 처리
  if (status === 200) {
    // request시 전달받은 메시지가 있으면 그 메시지를 사용하고, 그렇지 않으면 응답에서 받은 메시지를 사용
    const outputMessage = config.message || message;
    if (config.onSuccess) {
      onSuccess = config.onSuccess;
      showAlertWithButton(outputMessage, onSuccess);
    } else {
      showAlertWithoutButton(outputMessage);
    }
  }

  // request시 전달받은 메시지가 있으면 그것을 로깅하고, 메시지를 초기화
  if (config.message) {
    console.log(`axios 응답 성공 메시지 추가 : ${config.message}`);
    delete config.message;
  }
  if (config.onSuccess) {
    delete config.onSuccess;
  }

  return response;
};

const responseInterceptorError = async (error, instance) => {
  console.log('responseInterceptorError 시작', error);
  const {
    config,
    response: { status },
  } = error;
  const isLoginEmailVerification =
    error.response.data.isLoginEmailVerification || null;

  // 토큰 만료시 재발급, 기존 인스턴스를 그대로 사용하기 위해 플래그 retry 사용
  if (isLoginEmailVerification !== true && status === 401 && !config.retry) {
    const newToken = await getAccessToken();
    if (newToken) {
      config.headers['Authorization'] = `Bearer ${newToken}`;
      config.retry = true;
      return instance(config);
    }
  }

  let errorMessage = error.response?.data?.errMessage;
  if (typeof errorMessage === 'string' && errorMessage.includes('|')) {
    const parsedMessage = parseMessage(errorMessage);
    error.response.data.errMessage = parsedMessage;
  }
  // 성공 메세지 비워두기
  delete config.message;

  return Promise.reject(error);
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

const createAxiosInstance = (customObj, timeoutSecond) => {
  const instance = axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    timeout: timeoutSecond * 1000 || 100000000,
  });

  if (customObj) {
    const { message, onSuccess } = customObj;
    instance.defaults.customMessage = message;
    instance.defaults.customOnSuccess = onSuccess;
  }
  instance.interceptors.request.use(requestInterceptor);
  instance.interceptors.response.use(responseInterceptor, (error) =>
    responseInterceptorError(error, instance),
  );

  return instance;
};

export const api = {
  get: (path, timeoutSecond) => createAxiosInstance(timeoutSecond).get(path),
  post: (path, payload, customObj, timeoutSecond) =>
    createAxiosInstance(customObj, timeoutSecond).post(path, payload),
  delete: (path, timeoutSecond) =>
    createAxiosInstance(timeoutSecond).delete(path),
  put: (path, payload, timeoutSecond) =>
    createAxiosInstance(timeoutSecond).put(path, payload),
};
