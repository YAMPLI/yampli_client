// 유효성 검사를 위한 정규 표현식 정의
const patterns = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  // 비밀번호는 적어도 하나의 숫자, 하나의 영문자, 하나의 특수 문자를 포함하고 8-15자 길이여야 함
  PASSWORD: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
};

// 인증 관련 패턴을 모아둔 객체
const AUTH = {
  EMAIL: patterns.EMAIL,
  PASSWORD: patterns.PASSWORD,
};

// 모든 정규 표현식을 하나의 객체로 통합
const REGEX = {
  AUTH,
};

// 다른 곳에서 사용할 수 있도록 정규 표현식 내보내기
export default REGEX;
