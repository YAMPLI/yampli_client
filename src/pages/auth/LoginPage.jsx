import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../../config/SocialOAuth.';
import Text from '../../components/common/Text';
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

const LoginTitle = styled(Text).attrs({
  size: '22px',
})`
  line-height: 35px;
  margin: 20px 0;
  white-space: pre-line; // 문장에서 개행문자('\n') 적용하기 위한 스타일
`;
const ButtonWrapper = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  padding : 0 15px;
  margin: 45px 0;
  gap: 10px; // 상하좌우 여백
`;

// margin :30px 0 10px; 삭제 후 ButtonWrapper-> gap:10px , LoginTitle -> margin-bottom:20px 추가
const StyledLoginButton = styled(Button)`
  ${(props) => props.theme.Font('medium')}
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
    height: 20px;
    margin-top: 10px;
    padding: 0 17px 0 14px;
    ${(props) => props.theme.Font('small')};
    line-height: 20px;
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
