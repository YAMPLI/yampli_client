import React from 'react';
import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import ModalPortal from '../common/Portal';
import Button from '../common/Button';
// 버튼 미포함 모달
const Modal = ({ isOpen, onClose, children, duration, autoClose = false }) => {
  const timeSet = duration * 1000 || 2500;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKeyDown);

      // 자동으로 모달을 닫는 로직
      let autoCloseTimer;
      if (autoClose) {
        autoCloseTimer = setTimeout(() => {
          onClose();
        }, timeSet);
      }
      return () => {
        document.body.style.overflow = 'unset'; // 모달이 닫힐 때 overflow를 원래 상태로 복구
        document.removeEventListener('keydown', handleKeyDown);
        if (autoCloseTimer) clearTimeout(autoCloseTimer); // 컴포넌트가 언마운트되기 전에 타이머를 제거
      };
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <ThemeProvider theme={theme}>
          <ModalPortal>
            <Wrapper isOpen={isOpen} onClose={onClose}>
              <Overlay />
              <ModalMsgContainer>{children}</ModalMsgContainer>
            </Wrapper>
          </ModalPortal>
        </ThemeProvider>
      )}
    </>
  );
};
export default Modal;

// 버튼 포함된 모달
export const WithButtonModal = ({
  isOpen,
  children,
  onClose,
  submit,
  text,
  disabled,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalMsgContainer>
        {children}
        <ModalCloseContainer>
          <Button onClick={onClose}>취소</Button>
          <Button onClick={submit}>{text}</Button>
        </ModalCloseContainer>
      </ModalMsgContainer>
    </Modal>
  );
};
const Wrapper = styled.div`
  ${(props) => props.theme.FlexItemCenter};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: ${(props) => props.theme.color.text.main};
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalMsgContainer = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn};
  padding: 3.125rem 4.0625rem;
  letter-spacing: -0.5px;
  white-space: pre-line;
  background-color: ${(props) => props.theme.color.background.main};
  z-index: 99999;
`;

const ModalCloseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
