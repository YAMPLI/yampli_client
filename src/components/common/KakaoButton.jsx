import React from 'react';
import kakaoImg from '../../image/kakao_login_medium_narrow.png';

function KakaoButton() {
  const kakaoLogin = 'http://localhost:3306/api/auth/kakao';

  return (
    <div>
      <a href={kakaoLogin}>
        <img src={kakaoImg} alt="카카오로그인" />
      </a>
    </div>
  );
}

export default KakaoButton;
