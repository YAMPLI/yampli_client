import React from 'react';
import kakaoImg from '../../image/kakao_login_medium_narrow.png';

function KakaoButton() {
  const kakaoLogin = 'http://localhost:3306/api/auth/kakao';

  /**
   * @description URL 가져오기
   */
  //   const fetchGetURL = async () => {
  //     try {
  //       const { url } = await (
  //         await fetch('http://localhost:3306/api/auth/kakao')
  //       ).json();

  //       console.log(url); // 응답으로 온 url
  //     } catch (error) {
  //       alert('Function fetchGetURL error!');
  //       console.error(error);
  //     }
  //   };

  return (
    <div>
      <a href={kakaoLogin}>
        <img src={kakaoImg} alt="카카오로그인" />
      </a>
    </div>
  );
}

export default KakaoButton;
