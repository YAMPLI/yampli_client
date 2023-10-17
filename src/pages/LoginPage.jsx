import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../config/SocialOAuth.';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import KakaoLoginLogo from '../assets/imgs/logo-kakao.png';
const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <LoginTitle>
          간편하게 로그인하고 <br />
          나만의 플레이리스트를 만들어보세요.
        </LoginTitle>
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
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  padding: 130px 0;
`;

const LoginBox = styled.div`
  padding: 30px 20px;
  width: 400px;
  border: 2px solid ${(props) => props.theme.color.charcoalGray};
  text-align: center;
  overflow: hidden;
`;

const LoginTitle = styled(Text).attrs({
  size: '22px',
})`
  line-height: 35px;
  margin: 20px 0;
`;
const ButtonWrapper = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  margin: 45px 0;
  gap: 10px; // 상하좌우 여백
`;

// margin :30px 0 10px; 삭제 후 ButtonWrapper-> gap:10px , LoginTitle -> margin-bottom:20px 추가
const StyledLoginButton = styled(Button)`
  ${(props) => props.theme.Font('medium')}
  color: ${(props) =>
    props.kakao ? props.theme.color.dark : props.theme.color.offWhite};
  font-weight: 500;
  background: ${(props) =>
    props.kakao
      ? '#feeb4a'
      : `linear-gradient(to right, ${props.theme.color.lightPurple}, ${props.theme.color.lightBlue});`};
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
    color: ${(props) => props.theme.color.offWhite};
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
    background-color: ${(props) => props.theme.color.offWhite};
  }
`;
