import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Text from '../common/Text';

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
            {message.title && <AlertTitleMsg>{message.title}</AlertTitleMsg>}
            {message.subTitle && (
              <AlertSubTitleMsg>{message.subTitle}</AlertSubTitleMsg>
            )}
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
  ${({ theme }) => theme.FlexItemCenter};
  color: ${(props) => props.theme.color.text.main};
`;

const AlertContainer = styled.div`
  background-color: ${(props) => props.theme.color.background.main};
  border-radius: 0.5rem;
  width: 30%;
`;

const AlertMsgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1rem 1rem;
`;

const AlertTitleMsg = styled(Text).attrs({
  font: 'large',
})`
  letter-spacing: 1px;
  white-space: pre-line;
  font-weight: 600;
  line-height: 2rem;
`;

const AlertSubTitleMsg = styled(Text).attrs({
  color: 'lightGray',
  font: 'small',
})`
  letter-spacing: 1px;
  white-space: pre-line;
  margin-bottom: 5px;
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
  background-color: ${({ theme }) => theme.color.text.main};
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
