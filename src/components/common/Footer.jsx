import React from 'react';
import Card from 'react-bootstrap/Card';

const Footer1 = () => {
  if (window.location.pathname === '/kakao/oauth') return null;
  return (
    <div id="footer-wrapper">
      <Card className="card-wrap">
        <div className="child">
          <Card.Title className="card-title">(주) YAMPLI</Card.Title>
          <Card.Body>
            <ul className="cardUi">
              <li>
                <h6>대표 </h6>설한정
                <h6>주소지</h6>인천시 계양구 작전동
              </li>
              <li>
                <h6>사업자 등록번호</h6>111-111-1111
                <h6>연락처</h6> 010-111-1111
                <h6>이메일</h6> hanjeong94@naver.com
              </li>
            </ul>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Footer1;
