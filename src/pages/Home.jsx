import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from '../components/common/Main';
import KakaoButton from '../components/common/KakaoButton';

function Home() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3306/api/auth/authcheck').then((res) => {
      console.log(res);
      if (res.data.isLogin === 'True') {
        setMode('WELCOME');
      } else {
        setMode('LOGIN');
      }
    });
  }, []);

  let content = null;

  if (mode === 'LOGIN') {
    content = <div style={{ color: 'white', fontSize: '15px' }}>Login</div>;
  } else if (mode === 'SIGNIN') {
    content = <div style={{ color: 'white', fontSize: '15px' }}>SignIn</div>;
  } else if (mode === 'WELCOME') {
    content = (
      <>
        <h2>메인 페이지에 오신 것을 환영합니다</h2>
        <p>로그인에 성공하셨습니다.</p>
        <a href="/logout">로그아웃</a>
      </>
    );
  }
  return (
    <Main>
      <div>
        <KakaoButton />
        {content}
      </div>
    </Main>
  );
}

export default Home;
