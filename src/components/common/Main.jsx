import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './main.style.scss';
function Main({ children }) {
  const navigate = useNavigate();
  const preventAccess = ['/home', '/group'];
  useEffect(() => {
    if (preventAccess.includes(location.pathname)) {
      localStorage.getItem('token') === null && navigate('/');
    }
  }, []);
  return <div className="main-container">{children}</div>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
