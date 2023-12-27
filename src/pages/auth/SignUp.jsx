import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { LoginButton } from '../../components/common/Button';

import authStyles from './AuthStyles';
import STRINGS from '../../constants/strings';
import PLACEHOLDERS from '../../constants/placeholders';
import Input from '../../components/common/Input';
import useRegexInput from '../../hooks/useRegexInput';
import REGEX from '../../constants/regexPatterns';
import STRING from '../../constants/strings';
const SignUp = () => {
  const usePasswordMatch = (password, confirmPassword) => {
    const [isMatch, setIsMatch] = useState(false);

    useEffect(() => {
      setIsMatch(password === confirmPassword && confirmPassword !== '');
    }, [password, confirmPassword]);

    return isMatch;
  };

  // const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  const pwRegex = REGEX.AUTH.PASSWORD;
  const emailRegex = REGEX.AUTH.EMAIL;

  const {
    input: inputEmail,
    handleInputChange: handleEmailChange,
    message: emailMessage,
    isValid: isEmailValid,
  } = useRegexInput(STRING.AUTH.SIGN_UP.EMAIL_VALID_FALSE, '', emailRegex);
  const {
    input: inputPw,
    handleInputChange: handlePwChange,
    message: pwMessage,
    isValid: isPwValid,
  } = useRegexInput(
    STRING.AUTH.SIGN_UP.PASSWORD_VALID_FALSE,
    STRING.AUTH.SIGN_UP.PASSWORD_VALID_TRUE,
    pwRegex,
  );
  const {
    input: inputCheckPw,
    handleInputChange: handleCheckPwChange,
    message: checkPwMessage,
  } = useRegexInput(
    '비밀번호가 같지 않습니다. 다시 입력해주세요.',
    '비밀번호가 같습니다.',
    pwRegex,
  );
  const isPasswordMatch = usePasswordMatch(inputPw, inputCheckPw);

  return (
    <authStyles.AuthContainer>
      <authStyles.AuthBox>
        <SignTitle>{STRINGS.AUTH.TITLES.SIGNUP}</SignTitle>
        <InputContainer>
          <StyleInput
            type="email"
            value={inputEmail}
            onChange={handleEmailChange}
            placeholder={PLACEHOLDERS.ENTER_INPUT('이메일을 ')}
            autoComplete="off"
          ></StyleInput>
          <AlertSpan isMatch={isEmailValid}>{emailMessage}</AlertSpan>
          <StyleInput
            type="password"
            placeholder={PLACEHOLDERS.ENTER_INPUT('비밀번호를 ')}
            value={inputPw}
            onChange={handlePwChange}
            autoComplete="off"
            maxLength="16"
          ></StyleInput>
          {!inputPw && (
            <AlertSpan>{STRING.AUTH.SIGN_UP.PASSWORD_VALID}</AlertSpan>
          )}
          <AlertSpan isMatch={isPwValid}>{pwMessage}</AlertSpan>
          <StyleInput
            type="password"
            placeholder={PLACEHOLDERS.ENTER_INPUT('비밀번호를 재')}
            value={inputCheckPw}
            onChange={handleCheckPwChange}
            autoComplete="off"
            maxLength="16"
          ></StyleInput>
          <AlertSpan isMatch={isPasswordMatch}>{checkPwMessage}</AlertSpan>
        </InputContainer>
        <ButtonWrapper>
          <LoginButton>이메일로 로그인</LoginButton>
        </ButtonWrapper>
        <BottomSection>
          <a href="#">이메일로 회원가입</a>
          <a href="#">비밀번호 찾기</a>
        </BottomSection>
      </authStyles.AuthBox>
    </authStyles.AuthContainer>
  );
};

export default SignUp;

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
