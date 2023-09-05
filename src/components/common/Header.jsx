import React from 'react';
// 기존 Link와 혼동을 방지하기 위해서 RouterLink 이름으로 import
import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: '#ff9300' }} />;
function Header() {
  return (
    <HeaderContainer>
      <NavbarLink to="/">YAMPLI</NavbarLink>
      <DropdownMenu>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '28px' }} />
        <MenuContent>
          <MenuItemLink to="#action/3.1">회원정보</MenuItemLink>
          <MenuItemLink to="#action/3.2">그룹목록</MenuItemLink>
          <MenuItemLink to="#action/3.3">로그아웃</MenuItemLink>
        </MenuContent>
      </DropdownMenu>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  ${({ theme: { FlexBetween, headerHeight } }) => css`
    ${FlexBetween}
    ${headerHeight}
  `}
  align-items:center;
  padding: 0 250px;
  background: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.offWhite};
`;

// 홈 이미지 네비게이션 링크
const NavbarLink = styled(RouterLink)`
  color: ${({ theme }) => theme.color.offWhite};
  font-family: 'pretendar';
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.1em; // 글자 간격
  text-decoration: none;
`;

// 드롭다운 메뉴
const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }

  &:hover div {
    display: block;
  }
`;

const MenuContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.dark};
`;

const MenuItemLink = styled(RouterLink)`
  display: block;
  ${({ theme }) => css`
    ${theme.Font('pretendar', 20)};
    color: ${theme.color.white};
    &:hover {
      background: ${lighten(0.1, theme.color.darkGray)};
    }

    &:active {
      background: ${lighten(0.1, theme.color.darkGray)};
    }
  `}
  text-decoration: none;
  border-bottom: 0.1px solid;
  padding: 12px 16px;
`;
