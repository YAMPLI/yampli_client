import React from 'react';
import styled from 'styled-components';

import Text from '../../components/common/Text';
import Button from '../../components/common/Button';

import authStyles from './AuthStyles';
import STRINGS from '../../constants/strings';
import PLACEHOLDERS from '../../constants/placeholders';
import Input from '../../components/common/Input';

const SignUp = () => {
  return (
    <authStyles.AuthContainer>
      <authStyles.AuthBox>
        <SignTitle>{STRINGS.AUTH_TITLE.SIGN_TITLE}</SignTitle>
        <InputContainer>
          <StyleInput
            type="text"
            placeholder={PLACEHOLDERS.ENTER_INPUT('이메일을 ')}
            marginTop="55px"
          ></StyleInput>
          <StyleInput
            type="text"
            placeholder={PLACEHOLDERS.ENTER_INPUT('비밀번호를 ')}
            marginTop="55px"
          ></StyleInput>
          <StyleInput
            type="text"
            placeholder={PLACEHOLDERS.ENTER_INPUT('비밀번호를 재')}
            marginTop="55px"
          ></StyleInput>
          <StyleInput
            type="text"
            placeholder={PLACEHOLDERS.ENTER_INPUT('이름을 ')}
            marginTop="55px"
          ></StyleInput>
          <StyleInput
            type="text"
            placeholder={PLACEHOLDERS.ENTER_INPUT('닉네임을 ')}
            marginTop="55px"
          ></StyleInput>
        </InputContainer>
        <ButtonWrapper>
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

export default SignUp;

const SignTitle = styled(Text).attrs({
  size: '22px',
})`
  line-height: 35px;
  margin: 20px 0;
  white-space: pre-line;
`;
const InputContainer = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  padding : 0 15px;
`;

const StyleInput = styled(Input).attrs({
  padding: '25px 0px 20px 0px',
  border: `1 solid ${(props) => props.theme.color.charcoalGray}`,
})`
  border-width: 0 0 1px;
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
    height: 10px;
    background-color: ${(props) => props.theme.color.text.main};
  }
`;
