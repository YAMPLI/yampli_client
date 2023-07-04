import './App.css';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import KakaoCallback from './pages/KakaoCallback';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/kakao/oauth" element={<KakaoCallback />} />
        <Route element={<PrivateRoute />}>
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/playlist/create" element={<CreatePlaylistPage />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
