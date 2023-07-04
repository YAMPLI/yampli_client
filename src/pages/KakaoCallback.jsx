import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getLogin } from '../store/authSlice';
import LoadingSpinner from '../components/common/LodingSpinner';
const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  // uri의 '=' 뒷부분이 인가 코드이다.
  const authCode = location.search.split('=')[1];
  // 서버에 인가코드로 유저 데이터를 요청한다.

  useEffect(() => {
    dispatch(__getLogin(authCode));
  }, []);
  useEffect(() => {
    localStorage.setItem('token', user.token);
    if (user?.user?.nickname !== '') {
      if (user.token !== undefined) {
        if (localStorage.token !== undefined) {
          navigate('/home', { state: localStorage.token });
        }
      }
    } else {
      navigate('/');
    }
  }, [user]);

  return <LoadingSpinner />;
};
export default KakaoCallback;
