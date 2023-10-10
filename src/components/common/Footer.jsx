import React from 'react';
import styled from 'styled-components';
import Text from './Text';
function Footer() {
  if (window.location.pathname === '/kakao/oauth') return null;
  return (
    <FooterContainer>
      <TextTitle>(주) YAMPLI </TextTitle>
      <FooterContent>
        <FooterItem>
          <ItemTitle>대표</ItemTitle>&nbsp;&nbsp;설한정
          <ItemTitle>주소지</ItemTitle>&nbsp;&nbsp;인천시 계양구 작전동
        </FooterItem>
        <FooterItem>
          <ItemTitle>사업자 등록번호</ItemTitle>&nbsp;&nbsp;111-111-1111
          <ItemTitle>연락처</ItemTitle>&nbsp;&nbsp;010-111-1111
          <ItemTitle>이메일</ItemTitle>&nbsp;&nbsp;hanjeong94@naver.com
        </FooterItem>
      </FooterContent>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  height: 200px;
  z-index: 999;
  background: ${({ theme }) => theme.color.darkGray};
  color: ${({ theme }) => theme.color.offWhite};
  ${(props) => props.theme.FlexItemCenterColumn}
  position: relative;
  text-align: center;
`;

const TextTitle = styled(Text).attrs({
  as: 'h6',
  font: 'medium',
  size: '20px',
  weight: '500',
  mb: '25px',
})`
  margin-bottom: ${(props) => props.mb}; // attrs로 전달받은 mb props 설정
  font-weight: ${(props) => props.weight};
`;

const FooterContent = styled.ul``;

const FooterItem = styled.li`
  ${(props) => props.theme.Font('medium')}
  list-style-type: none;
  color: rgb(183, 172, 172);
  margin-bottom: 10px;
`;

const ItemTitle = styled(Text)`
  display: inline;
  ${(props) => props.theme.Font('small')}
  margin-left: 15px;
  color: gray;
`;

export default Footer;
