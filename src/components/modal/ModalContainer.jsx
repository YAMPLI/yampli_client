import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModal, selectModal } from '../../store/modalSlice';
import PlayModal from './PlayModal';

const MODAL_COMPONENTS = {
  playerModal: PlayModal,
};

const ModalContainer = () => {
  const { modalType, props, isOpen } = useSelector(selectModal);

  const dispatch = useDispatch();

  if (!isOpen) return;

  const Modal = MODAL_COMPONENTS[modalType];

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Wrapper>
        {Modal === PlayModal ? (
          <Overlay></Overlay>
        ) : (
          <Overlay onClick={close}></Overlay>
        )}
        <Content>
          <Modal close={close} {...props}></Modal>
        </Content>
      </Wrapper>
    </>
  );
};
export default ModalContainer;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 300px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  z-index: 999;
`;
