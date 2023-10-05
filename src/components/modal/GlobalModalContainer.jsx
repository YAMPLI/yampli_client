import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { closeModal, selectModal } from '../../store/modalSlice';
import PlayModal from '../playlist/PlayModal';

const MODAL_COMPONENTS = {
  playerModal: PlayModal,
};

/**
 * 전역 모달 컨테이너
 * 현재 열린 모달 유형과 속성을 가져와서 해당 모달 컴포넌트를 렌더링 한다.
 */
const GlobalModalContainer = () => {
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
export default GlobalModalContainer;

// 전체 화면 크기의 고정 위치에 모달을 중앙에 위치
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
  background: ${({ theme }) => theme.color.charcoalGray};
  border-radius: 2px;
  z-index: 999;
`;
