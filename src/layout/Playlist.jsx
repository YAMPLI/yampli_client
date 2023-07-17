import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Playlist({ children }) {
  const navigate = useNavigate();
  const preventAccess = ['/home', '/group'];
  useEffect(() => {
    if (preventAccess.includes(location.pathname)) {
      localStorage.getItem('token') === null && navigate('/');
    }
  }, []);
  return <StyledMain>{children}</StyledMain>;
}

Playlist.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Playlist;

const StyledMain = styled.Playlist`
  height: 100vh;
  padding-top: 50px;
  padding-left: 250px;
  padding-right: 250px;
  background-color: ${(props) => props.theme.Black};
`;
