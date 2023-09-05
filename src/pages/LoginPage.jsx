import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../config/SocialOAuth.';

const LoginPage = () => {
  return (
    <ImageWrapper>
      <StyledImage
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        onClick={() => (window.location.href = KAKAO_AUTH_URL)}
      />
    </ImageWrapper>
  );
};

export default LoginPage;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

const StyledImage = styled.img`
  cursor: pointer;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;
