import React from 'react';
import styled from 'styled-components';
function Footer() {
  if (window.location.pathname === '/kakao/oauth') return null;
  return (
    <FooterContainer>
      <FooterTitle>
        <span>(주) YAMPLI </span>
      </FooterTitle>
      <FooterContent>
        <FooterItem>
          대표 <span>설한정</span>
        </FooterItem>
        <FooterItem>
          주소지<span>인천시 계양구 작전동</span>
        </FooterItem>
      </FooterContent>
      <FooterContent>
        <FooterItem>
          사업자 등록번호<span>111-111-1111</span>
        </FooterItem>
        <FooterItem>
          연락처<span>010-111-1111</span>
        </FooterItem>
        <FooterItem>
          이메일<span>hanjeong94@naver.com</span>
        </FooterItem>
      </FooterContent>
    </FooterContainer>
  );
}
const FooterContainer = styled.div`
  height: 12.5rem;
  z-index: 999;
  background-color: ${(props) => props.theme.color.background.footer};
  ${(props) => props.theme.FlexItemCenterColumn}
  position: relative;
`;

const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  span {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const FooterContent = styled.ul`
  display: inline;
  font-size: 0.75rem;
  font-weight: 300;
  color: ${(props) => props.theme.color.text.sub};
  vertical-align: top;
  line-height: 1rem;
  margin-bottom: 0.375rem;
`;

const FooterItem = styled.li`
  display: inline;
  list-style-type: none;
  margin-left: 0.875rem;
  span {
    margin-left: 0.5rem;
    color: ${(props) => props.theme.color.text.sub1};
  }
`;

export default Footer;
