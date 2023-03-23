import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link to="/">
          <img src="/assets/test.png" alt="YAMPLI" />
        </Link>
        <StyledNavigation>
          <Link to="/login">Login</Link>
          <Link to="/playlist">Playlist</Link>
        </StyledNavigation>
      </HeaderLeft>
      <HeaderRight>
        <StyledNavigation>
          <Link to="/login">Login</Link>
        </StyledNavigation>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5rem;

  background: ${(props) => props.theme.Black};

  img {
    width: 200px;
    margin-right: 30px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div``;

const StyledNavigation = styled.nav`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  line-height: 2;

  a {
    margin: 0 30px;
    cursor: pointer;
    text-decoration-line: none;
    color: #ffffff;
  }
`;
