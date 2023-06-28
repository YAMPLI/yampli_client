import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Main({ children }) {
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
