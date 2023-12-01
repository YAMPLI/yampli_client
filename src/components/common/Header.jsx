import React from 'react';
// 기존 Link와 혼동을 방지하기 위해서 RouterLink 이름으로 import
import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Text from './Text';
// <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: '#ff9300' }} />;
function Header() {
  return (
    <HeaderContainer>
      <NavbarLink to="/">YAMPLI</NavbarLink>
      <DropdownMenu>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '20px' }} />
        <MenuContent>
          <MenuItemLink to="#action/3.1">
            <MenuItemTitle>회원정보</MenuItemTitle>
          </MenuItemLink>
          <MenuItemLink to="#action/3.2">
            <MenuItemTitle>그룹목록</MenuItemTitle>
          </MenuItemLink>
          <MenuItemLink to="#action/3.3">
            <MenuItemTitle>로그아웃</MenuItemTitle>
          </MenuItemLink>
        </MenuContent>
      </DropdownMenu>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  ${({ theme }) => theme.FlexBetween}
  width: 100%;
  height: ${({ theme }) => theme.headerHeight.height};
  align-items: center;
  padding: 0 250px;
  background-color: ${(props) => props.theme.color.background.default};
  z-index: 1000;
`;

// 홈 이미지 네비게이션 링크
const NavbarLink = styled(RouterLink)`
  ${({ theme }) => theme.Font('', '25px')}
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
  background-color: ${(props) => props.theme.color.background.default};
`;

const MenuItemLink = styled(RouterLink)`
  display: block;
  text-decoration: none;
  border-bottom: 0.1px solid;
  padding: 12px 16px;

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.color.background.footer)};
  }

  &:active {
    background: ${({ theme }) => lighten(0.1, theme.color.background.footer)};
  }
`;

const MenuItemTitle = styled(Text).attrs({
  font: 'small',
  color: 'offWhite',
})``;
