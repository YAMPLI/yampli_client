import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addGroup } from '../../store/groupSlice';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

const NetworkError = ({ onClickRetry }) => {
  return (
    <NetworkErrorContainer>
      <RefreshContainer>
        <TitleWrap>
          <span>잠시 후 다시 시도해주세요.</span>
        </TitleWrap>
        <ContentWrap>
          <span>요청사항을 처리하는데</span>
          <span>실패했습니다.</span>
        </ContentWrap>
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
  ${(props) => props.theme.FlexItemCenterColumn}
  text-align: center;
  padding: 0 25%;
`;

const TitleWrap = styled.div`
  margin: 0.625rem 0;
  span {
    font-size: 1.375rem;
    font-weight: 700;
  }
`;

const ContentWrap = styled.div`
  span {
    display: block;
    font-size: 1.25rem;
    color: ${(props) => props.theme.color.text.sub};
    line-height: 1.25rem;
  }
`;

const StyledLoginButton = styled(Button)`
  font-weight: 500;
  background: ${(props) =>
    `linear-gradient(to right, ${props.theme.color.button.gradientStart}, ${props.theme.color.button.gradientEnd});`};
  width: 60%;
  height: 2.75rem;
  margin: 1.875rem 0;
`;
