import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const AlertModalUI = ({
  isErrorModalOpen,
  message,
  duration,
  buttonCallback,
}) => {
  return (
    isErrorModalOpen && (
      <AlertWrapper>
        <AlertContainer>
          <AlertMsgWrapper>
            {message.title && <span>{message.title}</span>}
            {message.subTitle && <span>{message.subTitle}</span>}
          </AlertMsgWrapper>
          {buttonCallback ? (
            <ButtonContainer>
              <AlertButton onClick={buttonCallback}>확인</AlertButton>
            </ButtonContainer>
          ) : (
            <ProgressBar progressBarDuration={duration}></ProgressBar>
          )}
        </AlertContainer>
      </AlertWrapper>
    )
  );
};

export default AlertModalUI;

const AlertWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${(props) => props.theme.FlexItemCenter};
  color: ${(props) => props.theme.color.text.main};
`;

const AlertContainer = styled.div`
  background-color: ${(props) => props.theme.color.background.main};
  border-radius: 0.5rem;
  width: 30%;
`;

const AlertMsgWrapper = styled.div`
  ${(props) => props.theme.FlexColumn};
  justify-content: flex-start;
  padding: 1rem 1rem;
  span {
    letter-spacing: 1px;
    white-space: pre-line;
  }
  span:nth-child(1) {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 2rem;
  }
  span:nth-child(2) {
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.text.sub};
    margin-bottom: 5px;
  }
`;

const shrink = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;
const ProgressBar = styled.div`
  height: 0.2rem;
  background-color: ${(props) => props.theme.color.text.main};
  animation: ${shrink} ${(props) => props.progressBarDuration}ms linear forwards;
  pointer-events: none;
  border-radius: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 0.5rem 0.5rem 0;
`;

const AlertButton = styled.button`
  ${({ theme }) => theme.FlexItemCenter}
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 30px;
  height: 1.75rem;
  font-size: 0.875rem;
  background: linear-gradient(
    to right,
    rgba(155, 45, 239, 0.7),
    rgba(45, 206, 239, 0.7)
  );

  &:hover {
    background: linear-gradient(
      to right,
      rgba(155, 45, 239, 1),
      rgba(45, 206, 239, 1)
    );
  }
`;
