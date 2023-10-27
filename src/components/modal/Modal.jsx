import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ModalPortal from '../common/ModalPortal';
let root = null;

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <ModalPortal>
          <Wrapper isOpen={isOpen} onClose={onClose}>
            <Overlay />
            {children}
          </Wrapper>
        </ModalPortal>
      )}
    </>
  );
};
export default Modal;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
