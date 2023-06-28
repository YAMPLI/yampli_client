import React, { useState, useEffect } from 'react';
import Main from '../components/common/Main';
import KakaoButton from '../components/common/KakaoButton';

function Home() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    fetch('http://localhost:3306/api/auth/authcheck')
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((json) => {
        if (json.isLogin === 'True') {
          setMode('WELCOME');
        } else {
          setMode('LOGIN');
        }
      });
  }, []);

  let content = null;

  if (mode === 'LOGIN') {
    content = <div>Login</div>;
  } else if (mode === 'SIGNIN') {
    content = <div>SignIn</div>;
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
