import React from 'react';
import styled, { css } from 'styled-components';

function Footer() {
  if (window.location.pathname === '/kakao/oauth') return null;
  return (
    <FooterWrap>
      <FooterTitle>(주) YAMPLI </FooterTitle>
      <FooterContent as="ul">
        <li>
          <h6>대표</h6>&nbsp;&nbsp;설한정
          <h6>주소지</h6>&nbsp;&nbsp;인천시 계양구 작전동
        </li>
        <li>
          <h6>사업자 등록번호</h6>&nbsp;&nbsp;111-111-1111
          <h6>연락처</h6>&nbsp;&nbsp;010-111-1111
          <h6>이메일</h6>&nbsp;&nbsp;hanjeong94@naver.com
        </li>
      </FooterContent>
    </FooterWrap>
  );
}
const FooterWrap = styled.div`
  ${({ theme }) => css`
     {
      background: ${theme.color.darkGray1};
      ${theme.MoveCenter};
      ${theme.FlexColumn};
      align-items: center;
      position: relative;
      text-align: center;
      height: 250px;
      z-index: 999;
    }
  `}
`;

const FooterTitle = styled.h6`
  ${({ theme }) => css`
     {
      ${theme.FlexCenter}
      color: ${theme.color.offWhite};
      ${theme.Font('pretendar', 25)};
      font-weight: 500;
      margin-bottom: 25px;
    }
  `}
`;

const FooterContent = styled.div`
  li {
    list-style-type: none;
    color: rgb(183, 172, 172);
    margin-bottom: 10px;
  }
  h6 {
    display: inline;
    margin-left: 15px;
    color: gray;
    font-size: 15px;
  }
`;

export default Footer;
