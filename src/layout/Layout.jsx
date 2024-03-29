import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import MiniPlayer from '../components/playlist/MiniPlayer';
import GlobalPlayer from '../components/common/GlobalPlayer';
import { PlayerProvider } from '../context/PlayerContext';
import GlobalErrorBoundary from '../components/errors/GlobalErrorBoundary';
// Toast 렌더링
import Toast from '../components/common/Toast';
import { selectToastState } from '../store/toastSlice';
import useToast from '../hooks/useToast';
import { useSelector } from 'react-redux';
function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true); // 메뉴 표시 상태
  const { toasts } = useSelector(selectToastState);
  const { deleteToast } = useToast();
  // 미니플레이어 토글 관리
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  // 토큰 확인
  const preventAccess = ['/home', '/group'];

  // Footer 표시할 경로 . "/^\/$/" : 로그인페이지
  const VIEW_FOOTER_PATTERNS = [/^\/home$/];

  // 동적인 경로 패턴에서 MiniPlayer 제외하기 위한 정규표현식
  const HIDDEN_MINIPLAYER_PATTERNS = [
    /^\/$/,
    // /^\/playlist$/,
    // /^\/group$/,
    // /^\/playlist\/[^/]+$/,
    /^\/kakao\/[^/]+$/,
  ];

  // 주어진 패턴과 일치하는 주소를 가졌는지 확인하기 위한 some 함수
  const isHiddenMiniPlayer = HIDDEN_MINIPLAYER_PATTERNS.some((pattern) =>
    pattern.test(location.pathname),
  );

  // 주어진 패턴과 일치하는 주소를 가졌는지 확인하기 위한 some 함수
  const isViewFooter = VIEW_FOOTER_PATTERNS.some((pattern) =>
    pattern.test(location.pathname),
  );

  useEffect(() => {
    if (preventAccess.includes(location.pathname)) {
      localStorage.getItem('token') === null && navigate('/');
    }
  }, [location.pathname]);

  return (
    <PlayerProvider>
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <LayoutContainer className="layoutContainer">
        <Header />
        <ContentWrap className="contentWrap">
          <GlobalErrorBoundary>
            <Outlet />
          </GlobalErrorBoundary>
        </ContentWrap>
        {!isHiddenMiniPlayer && (
          <>
            <ToggleMenuButton onClick={toggleMenu}>
              '미니플레이리스트'
            </ToggleMenuButton>
            {showMenu ? <MiniPlayer /> : '닫기'}
          </>
        )}
        {isViewFooter && <Footer />}
        <GlobalPlayer />
      </LayoutContainer>
    </PlayerProvider>
  );
}

export default Layout;

// 반응형 폰트 사이즈 설정
const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.color.background.default};
  // globalStyle에서 정의한 모든 기본 color는 상속받도록 설정. (offwhite) 색상을 기본으로 사용
  color: ${(props) => props.theme.color.text.main};
  // 자식 요소들의 높이를 동적으로 조절하기 위해 flexbox 사용
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; // 자식 요소들이 전체 높이를 채우도록 설정 */
  /* height: calc(var(--vh, 1vh) * 100); */
  height: 100vh;
`;

const ContentWrap = styled.div`
  ${({ theme: { headerHeight } }) => css`
    margin-top: ${headerHeight.height};
  `}
  overflow: auto;
  // 스크롤바 스타일
  &::-webkit-scrollbar {
    width: 12px;
    z-index: 1000; // 높은 z-index 값 설정
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  flex: 1; // 남은 공간을 채우도록 설정
`;
const ToggleMenuButton = styled.button`
  /* position: absolute; */
  z-index: 0;
  background-color: inherit;
  color: white;
`;
