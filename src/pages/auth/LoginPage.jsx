import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../../config/SocialOAuth.';
import { LoginButton } from '../../components/common/Button';
import KakaoLoginLogo from '../../assets/imgs/logo-kakao.png';
import authStyles from './AuthStyles';
import STRINGS from '../../constants/strings';
const LoginPage = () => {
  return (
    <authStyles.AuthContainer>
      <authStyles.AuthBox>
        <LoginTitle>{STRINGS.AUTH.TITLES.LOGIN}</LoginTitle>
        <ButtonWrapper>
          <LoginButton
            kakao
            onClick={() => (window.location.href = KAKAO_AUTH_URL)}
          >
            <img src={KakaoLoginLogo} alt="kakao login" />
            카카오로 로그인
          </LoginButton>
          <LoginButton fullWidth>이메일로 로그인</LoginButton>
        </ButtonWrapper>
        <BottomSection>
          <a href="/signup">이메일로 회원가입</a>
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
