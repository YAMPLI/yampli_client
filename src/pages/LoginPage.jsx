import React from 'react';
import Main from '../components/common/Main';
import { KAKAO_AUTH_URL } from '../config/SocialOAuth.';

const LoginPage = () => {
  console.log(KAKAO_AUTH_URL);
  return (
    <Main>
      <img
        className="cursor-pointer"
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        onClick={() => (window.location.href = KAKAO_AUTH_URL)}
      />
    </Main>
  );
};

export default LoginPage;
