import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Button from '../../components/common/Button';

import authStyles from './AuthStyles';
import STRINGS from '../../constants/strings';
import PLACEHOLDERS from '../../constants/placeholders';
import Input from '../../components/common/Input';
import useRegexInput from '../../hooks/useRegexInput';
import REGEX from '../../constants/regexPatterns';
import STRING from '../../constants/strings';
import { __getEmailLogin } from '../../store/authSlice';

/**
 * =========================
 * React Component Section
 * =========================
 */
const EmailLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  const pwRegex = REGEX.AUTH.PASSWORD;
  const emailRegex = REGEX.AUTH.EMAIL;

  // 이메일 검증 -> 커스텀 훅 사용
  const {
    input: inputEmail,
    handleInputChange: handleEmailChange,
    message: emailMessage,
    isValid: isEmailValid,
    handleFocus: handleEmailFocus,
  } = useRegexInput(STRING.AUTH.SIGN_UP.EMAIL_VALID_FALSE, '', emailRegex);

  // 비밀번호 검증 -> 커스텀 훅 사용
  const {
    input: inputPw,
    handleInputChange: handlePwChange,
    message: pwMessage,
    isValid: isPwValid,
    handleFocus: handlePwFocus,
  } = useRegexInput(
    STRING.AUTH.SIGN_UP.PASSWORD_VALID_FALSE,
    STRING.AUTH.SIGN_UP.PASSWORD_VALID_TRUE,
    pwRegex,
  );

  // 이메일, 비밀번호, 2차 비밀번호 모두 유효한지 여부
  const isFormValid = isEmailValid && isPwValid;

  // 회원가입 핸들러
  const handleLogin = async () => {
    const userInfo = {
      email: inputEmail,
      password: inputPw,
    };
    dispatch(
      __getEmailLogin({
        userInfo,
        customObj: {
          message: `로그인에 성공했습니다..`,
          onSuccess: () => navigate('/login'),
        },
      }),
    );
  };

  return (
    <authStyles.AuthContainer>
      <authStyles.AuthBox>
        <SignTitle>{STRINGS.AUTH.TITLES.LOGIN}</SignTitle>
        <InputContainer>
          <StyleInput
            type="email"
            value={inputEmail}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
            placeholder={PLACEHOLDERS.ENTER_INPUT('이메일을 ')}
            autoComplete="off"
          ></StyleInput>
          <AlertSpan isMatch={isEmailValid}>{emailMessage}</AlertSpan>
          <StyleInput
            type="password"
            placeholder={PLACEHOLDERS.ENTER_INPUT('비밀번호를 ')}
            value={inputPw}
            onChange={handlePwChange}
            onFocus={handlePwFocus}
            autoComplete="off"
            maxLength="16"
          ></StyleInput>
          {!isPwValid && (
            <AlertSpan>{STRING.AUTH.SIGN_UP.PASSWORD_VALID}</AlertSpan>
          )}
        </InputContainer>
        <ButtonWrapper>
          <Button signUp onClick={handleLogin} disabled={!isFormValid}>
            로그인
          </Button>
        </ButtonWrapper>
        <BottomSection>
          <a href="#">이메일 찾기</a>
          <a href="#">비밀번호 찾기</a>
        </BottomSection>
      </authStyles.AuthBox>
    </authStyles.AuthContainer>
  );
};

export default EmailLogin;

/**
 * =========================
 * Styled Component Section
 * =========================
 */

const SignTitle = styled.span`
  font-size: 1.375rem;
  line-height: 2.125rem;
  margin: 1.25rem 0;
  white-space: pre-line;
`;

const InputContainer = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  padding : 0 1rem;
`;

const StyleInput = styled(Input).attrs({
  padding: '1.5rem 0 1.25rem 0',
  border: `1px solid ${(props) => props.theme.color.border.border1}`,
  margin: ` 1rem 0 0 0`,
})`
  border-width: 0 0 1px;
  outline: none;
`;

const AlertSpan = styled.span`
  align-self: flex-start;
  margin-top: 0.375rem;
  font-size: 0.75rem;
  font-family: 'scdream4';
  font-weight: 600;

  color: ${(props) =>
    props.isMatch
      ? props.theme.color.text.success
      : props.theme.color.text.alert};
`;

const ButtonWrapper = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  margin: 2.75rem 0;
  padding: 0 0.875rem;
  gap: 0.625rem; // 상하좌우 여백
`;

const BottomSection = styled.div`
  font-size: 0;
  a {
    display: inline-block;
    position: relative;
    height: 1.25rem;
    margin-top: 0.625rem;
    padding: 0 1.125rem 0 0.875rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    /* color: ${(props) => props.theme.color.offWhite}; */
  }
  // 마지막 a태그에는 적용 x
  a:not(:last-of-type)::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 5px;
    width: 1px;
    height: 0.625rem;
    background-color: ${(props) => props.theme.color.text.main};
  }
`;
