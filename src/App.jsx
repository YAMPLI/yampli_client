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
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GlobalModalContainer from './components/modal/GlobalModalContainer';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <GlobalModalContainer></GlobalModalContainer>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/group" element={<Group />} />
            <Route path="/kakao/oauth" element={<KakaoCallback />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
            <Route path="/playlist/create" element={<CreatePlaylistPage />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
const ContentWrapper = styled.div`
  flex: 1;
`;
