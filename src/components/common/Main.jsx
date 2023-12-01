import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Main({ children }) {
  const navigate = useNavigate();
  const preventAccess = ['/home', '/group'];
  useEffect(() => {
    if (preventAccess.includes(location.pathname)) {
      localStorage.getItem('token') === null && navigate('/');
    }
  }, []);
  return <MainContainer>{children}</MainContainer>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;

// 반응형 폰트 사이즈 설정
const MainContainer = styled.div`
  height: calc(100vh - 60px - 40px); // 전체 높이 - 헤더 - 푸터 높잉
  background-color: ${(props) => props.theme.color.background.default};
  padding: 20px; // 내부 패딩
  overflow-y: hidden; // 하위 컴포넌트 height 고려
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
