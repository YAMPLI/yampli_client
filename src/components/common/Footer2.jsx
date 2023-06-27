import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <FooterWrapper>
      <GridItem1>
        <Text2>(주) YAMPLI</Text2>
        <Text1>대표자 설한정</Text1>
        <Text1>주소지 인천시 계양구 작전동</Text1>
        <Text1>사업자 등록번호 111-111-11111</Text1>
      </GridItem1>
      <GridItem2>
        <Text4>YAMPLI</Text4>
        <Text3>만든 사람들</Text3>
        <Text3>문의하기</Text3>
        <Text3>사용 메뉴얼</Text3>
      </GridItem2>
      <GridItem3>
        <FooterBottomLeft>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
        </FooterBottomLeft>
        <FooterBottomRight>
          <Link to="/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: '#bababa' }}
            />
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              icon={faTwitter}
              size="xl"
              style={{ color: '#bababa' }}
            />
          </Link>
          <Link to="/">
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              style={{ color: '#bababa' }}
            />
          </Link>
        </FooterBottomRight>
      </GridItem3>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 130px 36px;
  background: ${(props) => props.theme.darkGray};
`;

const GridItem1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 23px;
  border-bottom: 1px solid gray;
`;

const GridItem2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 23px;
  border-bottom: 1px solid gray;
`;

const GridItem3 = styled.div`
  display: flex;
  grid-column: 1/3;
  align-items: center;
`;

const Text1 = styled.div`
  margin-left: 650px;
  padding-bottom: 6px;
  font-size: 14px;
  font-family: SCDream5;
  color: #bababa;
`;

const Text3 = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
  font-family: SCDream5;
  color: #bababa;
`;

const Text2 = styled(Text1)`
  margin-bottom: 12px;
  font-size: 17px;
  color: #cfcfcf;
`;

const Text4 = styled(Text3)`
  margin-bottom: 12px;
  font-size: 17px;
  color: #cfcfcf;
`;

const FooterBottomLeft = styled.div`
  display: flex;
  font-family: SCDream5;
  color: #bababa;
  margin-left: 598px;
  p {
    margin-left: 50px;
    font-size: 14px;
  }
`;

const FooterBottomRight = styled.div`
  margin-left: auto;
  padding-right: 450px;
  a {
    margin-right: 50px;
  }
`;
