import './App.css';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import Group from './pages/GroupPage';
import KakaoCallback from './pages/KakaoCallback';
import Layout from './layout/Layout';
import GlobalModalContainer from './components/modal/GlobalModalContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalModalContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/group" element={<Group />} />
          <Route path="/kakao/oauth" element={<KakaoCallback />} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
          <Route path="/playlist/create" element={<CreatePlaylistPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
