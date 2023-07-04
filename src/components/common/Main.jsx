import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Main({ children }) {
  const navigate = useNavigate();
  const preventAccess = ['/home'];
  useEffect(() => {
    if (preventAccess.includes(location.pathname)) {
      localStorage.getItem('token') === null && navigate('/');
    }
  }, []);
  return <StyledMain>{children}</StyledMain>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;

const StyledMain = styled.main`
  height: 100vh;
  padding-top: 50px;
  padding-left: 250px;
  padding-right: 250px;
  background-color: ${(props) => props.theme.Black};
`;
