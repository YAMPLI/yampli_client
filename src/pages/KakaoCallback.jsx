import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // uri의 '=' 뒷부분이 인가 코드이다.
  const authCode = location.search.split('=')[1];
  console.log(authCode);
  // 서버에 인가코드로 유저 데이터를 요청한다.
  const getToken = async () => {
    await axios
      .get(`http://localhost:3306/api/auth/kakao/oauth?code=${authCode}`)
      .then((res) => {
        console.log(res);
        navigate('/');
      });
  };
  useEffect(() => {
    getToken();
  }, []);

  return <></>;
};
export default KakaoCallback;
