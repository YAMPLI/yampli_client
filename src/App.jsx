import './App.css';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import Group from './pages/GroupPage';
import KakaoCallback from './pages/KakaoCallback';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ModalContainer from './components/modal/ModalContainer';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ModalContainer></ModalContainer>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/group" element={<Group />} />
        <Route path="/kakao/oauth" element={<KakaoCallback />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/playlist/create" element={<CreatePlaylistPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
