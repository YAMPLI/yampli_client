import React, { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const preventAccess = ['/home', '/group'];
  // 동적인 경로 패턴에서 footer 제외하기 위한 정규표현식
  const HIDDEN_FOOTER_PATTERNS = [
    /^\/playlist$/,
    /^\/group$/,
    /^\/playlist\/[^/]+$/,
  ];
  // 주어진 패턴과 일치하는 주소를 가졌는지 확인하기 위한 some 함수
  const isHiddenFooter = HIDDEN_FOOTER_PATTERNS.some((pattern) =>
    pattern.test(location.pathname),
  );

  useEffect(() => {
    if (preventAccess.includes(location.pathname)) {
      localStorage.getItem('token') === null && navigate('/');
    }
  }, [location.pathname]);

  return (
    <LayoutContainer className="layoutContainer">
      <Header />
      <ContentWrap className="contentWrap">
        <Outlet />
      </ContentWrap>
      {!isHiddenFooter && <Footer />}
    </LayoutContainer>
  );
}

export default Layout;

// 반응형 폰트 사이즈 설정
const LayoutContainer = styled.div`
  background-color: ${({ theme }) => theme.color.dark};
  // 자식 요소들의 높이를 동적으로 조절하기 위해 flexbox 사용
  display: flex;
  flex-direction: column;
  min-height: 100vh; // 자식 요소들이 전체 높이를 채우도록 설정

  // Mobile styles
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 14px;
  }

  // Tablet styles
  @media ${({ theme }) => theme.media.tablet} {
    font-size: 16px;
  }

  // Desktop styles
  @media ${({ theme }) => theme.media.desktop} {
    font-size: 18px;
  }

  // Large Desktop styles
  @media ${({ theme }) => theme.media.largeDesktop} {
    font-size: 20px;
  }
`;

const ContentWrap = styled.div`
  ${({ theme: { headerHeight } }) => css`
    padding-top: ${headerHeight.height};
  `}
  flex: 1; // 남은 공간을 채우도록 설정
`;
