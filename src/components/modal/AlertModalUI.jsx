import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from '../common/Button';

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
            {message.title || message.subTitle ? (
              <>
                {message.title && <span>{message.title}</span>}
                {message.subTitle && <span>{message.subTitle}</span>}
              </>
            ) : (
              message
            )}
          </AlertMsgWrapper>
          {buttonCallback ? (
            <ButtonContainer>
              <Button fontW="bold" onClick={buttonCallback}>
                확인
              </Button>
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
  background-color: rgba(0, 0, 0, 0.6);
`;

const AlertContainer = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn};
  background-color: ${(props) => props.theme.color.background.main};
  border-radius: 0.5rem;
  width: 21.25rem;
`;

const AlertMsgWrapper = styled.div`
  ${(props) => props.theme.FlexColumn};
  min-height: 4rem;
  padding: 1rem 1rem;
  white-space: pre-line;
  line-height: 1.375rem;
  span {
    letter-spacing: 1px;
  }
  span:nth-child(1) {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 2rem;
  }
  span:nth-child(2) {
    font-size: 0.875rem;
    color: ${(props) => props.theme.color.text.sub};
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
  align-self: end;
  padding: 0 0.75rem 0.75rem 0;
`;
