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

const MainContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black}; ;
`;
