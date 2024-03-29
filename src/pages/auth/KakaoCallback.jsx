import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getKakaoLogin } from '../../store/authSlice';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  // uri의 '=' 뒷부분이 인가 코드이다.
  const authCode = location.search.split('=')[1];
  // 서버에 인가코드로 유저 데이터를 요청한다.

  useEffect(() => {
    dispatch(__getKakaoLogin(authCode))
      .unwrap()
      .then(() => {
        console.log('성공');
      })
      .catch((err) => {
        navigate('/login');
      });
  }, []);
  useEffect(() => {
    console.log(user.url);
    if (user.url) {
      navigate(user.url);
    }
    localStorage.setItem('token', user.token);
    if (user?.user?.nickname !== '') {
      if (user.token !== undefined) {
        if (localStorage.token !== undefined) {
          navigate('/group');
        }
      }
    } else {
      navigate('/');
    }
  }, [user]);

  return <LoadingSpinner />;
};
export default KakaoCallback;
