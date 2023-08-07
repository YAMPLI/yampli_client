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
    <HeaderWrap>
      <TopNavbar>
        <NavLink to="/" color="offWhite">
          YAMPLI
        </NavLink>
        <Dropdown>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: '28px' }} />
          <DropdownContent>
            <DropdownLink to="#action/3.1">회원정보</DropdownLink>
            <DropdownLink to="#action/3.2">그룹목록</DropdownLink>
            <DropdownLink to="#action/3.3">로그아웃</DropdownLink>
          </DropdownContent>
        </Dropdown>
      </TopNavbar>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  width: 100pv;
  height: 55px;
  background: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.offWhite};
`;

const NavLink = styled(RouterLink)`
  ${({ theme }) => css`
    color: ${theme.color.offWhite};
    ${theme.Font('pretendar', 25)};
    font-weight: 500;
    letter-spacing: 0.1em;
    text-decoration: none;
  `}
`;

const TopNavbar = styled.div`
  ${({ theme }) => css`
    height: 100%;
    ${theme.FlexBetween}
    align-items : center;
    margin: 0 250px;
    color: ${theme.color.offWhite};
    ${theme.Font('pretendar', 17)};
  `}
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.dark};
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

const DropdownLink = styled(RouterLink)`
  ${({ theme }) => {
    const orange = theme.color.offWhite;
    return css`
      display: block;
      ${theme.Font('pretendar', 20)};
      color: ${theme.color.white};
      text-decoration: none;
      border-bottom: 0.1px solid;
      padding: 12px 16px;
      &:hover {
        background: ${lighten(0.1, orange)};
      }
      &:active {
        background: ${darken(0.1, orange)};
      }
    `;
  }}
`;
