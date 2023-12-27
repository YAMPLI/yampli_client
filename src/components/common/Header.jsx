import React from 'react';
// 기존 Link와 혼동을 방지하기 위해서 RouterLink 이름으로 import
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ARRAY from '../../constants/array';

// <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: '#ff9300' }} />;
function Header() {
  return (
    <HeaderContainer>
      <NavbarLink to="/">YAMPLI</NavbarLink>
      {ARRAY.NAVBAR_TITLE.USER.map((title) => (
        <span>{title}</span>
      ))}
      <DropdownMenu>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '20px' }} />
        <MenuContent>
          <MenuItemLink to="#action/3.1">
            <span>회원정보</span>
          </MenuItemLink>
          <MenuItemLink to="#action/3.2">
            <span>그룹목록</span>
          </MenuItemLink>
          <MenuItemLink to="#action/3.3">
            <span>로그아웃</span>
          </MenuItemLink>
        </MenuContent>
      </DropdownMenu>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  ${(props) => props.theme.FlexBetween};
  align-items: center;
  position: fixed;
  width: 100%;
  height: ${(props) => props.theme.headerHeight.height};
  padding: 0 15.625rem;
  background-color: ${(props) => props.theme.color.background.default};
  z-index: 1000;

  @media ${(props) => props.theme.media.tablet} {
    padding: 16px;
  }
`;

// 홈 이미지 네비게이션 링크
const NavbarLink = styled(RouterLink)`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.375rem; // 글자 간격
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
  min-width: 7.5rem;
  z-index: 1;
  background-color: ${(props) => props.theme.color.background.default};
`;

const MenuItemLink = styled(RouterLink)`
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0.75rem 1rem;
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.color.background.default)};
  }
  span {
    font-size: 0.875rem;
  }
`;
