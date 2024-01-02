import './App.css';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import LoginPage from './pages/auth/LoginPage';
import PlaylistPage from './pages/PlaylistPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import Group from './pages/GroupPage';
import KakaoCallback from './pages/KakaoCallback';
import Layout from './layout/Layout';
import GlobalModalContainer from './components/modal/GlobalModalContainer';
import SignUp from './pages/auth/SignUp';
import Test from './myTest/TestDisplay';
import EmailAuthPage from './pages/auth/EmailAuth';

function App() {
  return (
    <>
      <GlobalModalContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<EmailAuthPage />} />
          <Route path="/group" element={<Group />} />
          <Route path="/kakao/oauth" element={<KakaoCallback />} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
          <Route path="/playlist/create" element={<CreatePlaylistPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
