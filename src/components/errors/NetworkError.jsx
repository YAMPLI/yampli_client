import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addGroup } from '../../store/groupSlice';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import Text from '../common/Text';

const NetworkError = ({ onClickRetry }) => {
  return (
    <NetworkErrorContainer>
      <RefreshContainer>
        <Title> 잠시 후 다시 시도해주세요. </Title>
        <Content>
          요청사항을 처리하는데 <br />
          실패했습니다.
        </Content>
        <StyledLoginButton onClick={onClickRetry}>새로 고침</StyledLoginButton>
      </RefreshContainer>
    </NetworkErrorContainer>
  );
};

export default NetworkError;

const NetworkErrorContainer = styled.div`
  background-color: transparent;
`;

const RefreshContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0 25%;
`;

const Title = styled(Text).attrs({
  size: '22px',
})`
  /* line-height: 35px; */
  margin: 10px 0;
  font-weight: 700;
`;
const Content = styled(Text).attrs({
  size: 'medium',
  color: 'softGray',
})`
  line-height: 20px;
  white-space: pre-line;
`;
const StyledLoginButton = styled(Button)`
  ${(props) => props.theme.Font('medium')}
  font-weight: 500;
  background: ${(props) =>
    `linear-gradient(to right, ${props.theme.color.button.gradientStart}, ${props.theme.color.button.gradientEnd});`};
  width: 60%;
  height: 45px;
  margin: 30px 0;
`;
