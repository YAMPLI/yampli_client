// 인증 관련 문자열 상수를 정의합니다.
const AUTH_STRINGS = {
  TITLES: {
    LOGIN: '간편하게 로그인하고 \n나만의 플레이리스트를 만들어보세요.',
    SIGNUP: '지금 가입하고 \n나만의 플레이리스트를 만들어보세요.',
  },
  SIGN_UP: {
    EMAIL_VALID_FALSE: '이메일 형식이 옳바르지 않습니다.',
    PASSWORD_VALID: '비밀번호는 영문,숫자,특수문자를 포함하여 8~16자리 입니다.',
    PASSWORD_VALID_TRUE: '사용 가능한 비밀번호 입니다.',
    PASSWORD_VALID_FALSE: '사용 할 수 없는 비밀번호 입니다.',
    PASSWORD_COMPARE_TRUE: '2차 비밀번호 인증에 성공했습니다.',
    PASSWORD_COMPARE_FALSE:
      '2차 비밀번호 인증에 실패했습니다. 다시 확인해주세요.',
  },
  AUTH_EMAIL: {
    AUTH_SUCCESS_TITLE: '이메일 인증에 성공했습니다.',
    AUTH_SUCCESS_SUBTITLE: '이제부터 로그인 후 서비스를 이용해보세요.',
  },
};

// 모든 문자열을 STRINGS 객체에 담아서 관리합니다.
const STRINGS = {
  AUTH: AUTH_STRINGS,
};

// 다른 곳에서 사용할 수 있도록 STRINGS 객체 내보내기
export default STRINGS;
