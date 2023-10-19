const AUTH = {
  EMAIL: '^[w-.]+@([w-]+.)+[w-]{2,4}$',
  PASSWORD: '/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/', // 숫자, 영문자, 특수문자 1개포함 ,  8~16자
};

const REGEX = { AUTH };

export default REGEX;
