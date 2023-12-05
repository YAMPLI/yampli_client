import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../../config/SocialOAuth.';
import Button from '../../components/common/Button';
import KakaoLoginLogo from '../../assets/imgs/logo-kakao.png';
import authStyles from './AuthStyles';
import STRINGS from '../../constants/strings';
const LoginPage = () => {
  return (
    <authStyles.AuthContainer>
      <authStyles.AuthBox>
        <LoginTitle>{STRINGS.AUTH_TITLE.LOGIN_TITLE}</LoginTitle>
        <ButtonWrapper>
          <StyledLoginButton
            fullWidth
            kakao
            onClick={() => (window.location.href = KAKAO_AUTH_URL)}
          >
            <img src={KakaoLoginLogo} alt="kakao login" />
            카카오로 로그인
          </StyledLoginButton>
          <StyledLoginButton fullWidth>이메일로 로그인</StyledLoginButton>
        </ButtonWrapper>
        <BottomSection>
          <a href="#">이메일로 회원가입</a>
          <a href="#">비밀번호 찾기</a>
        </BottomSection>
      </authStyles.AuthBox>
    </authStyles.AuthContainer>
  );
};

export default LoginPage;

const LoginTitle = styled.p`
  font-size: 1.375rem;
  line-height: 2.125rem;
  margin: 1.25rem 0;
  white-space: pre-line; // 문장에서 개행문자('\n') 적용하기 위한 스타일
`;
const ButtonWrapper = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  padding : 0 1rem;
  margin: 2.75rem 0;
  gap: 0.625rem; // 상하좌우 여백
`;

// margin :30px 0 10px; 삭제 후 ButtonWrapper-> gap:10px , LoginTitle -> margin-bottom:20px 추가
const StyledLoginButton = styled(Button)`
  color: ${(props) =>
    props.kakao
      ? props.theme.color.background.default
      : props.theme.color.text.main};
  font-weight: 500;
  background: ${(props) =>
    props.kakao
      ? '#feeb4a'
      : `linear-gradient(to right, ${props.theme.color.button.gradientStart}, ${props.theme.color.button.gradientEnd});`};
  width: 100%;
  height: 45px;
  line-height: 48px;
  img {
    margin-right: 6px;
    max-width: 100%;
    max-height: 100%;
    vertical-align: top;
  }
  & + & {
    margin-left: 0;
  }
`;

const BottomSection = styled.div`
  font-size: 0;
  a {
    display: inline-block;
    position: relative;
    height: 1.25rem;
    margin-top: 0.625rem;
    padding: 0 1rem 0 0.875rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme.color.text.main};
  }
  // 마지막 a태그에는 적용 x
  a:not(:last-of-type)::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 5px;
    width: 1px;
    height: 10px;
    background-color: ${(props) => props.theme.color.text.main};
  }
`;
