import styled from 'styled-components';
import Button from '../common/Button';
import PropTypes from 'prop-types';

const Modal1 = ({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  close,
}) => {
  return (
    <>
      <ModalBackground>
        <Overlay onClick={close}></Overlay>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <h3>{title}</h3>
          <p>{children}</p>
          <ButtonGroup>
            <ShortMarginButton onClick={onConfirm} color="lightOrange">
              {confirmText}
            </ShortMarginButton>
            <ShortMarginButton onClick={onCancel} color="lightOrange">
              {cancelText}
            </ShortMarginButton>
          </ButtonGroup>
        </ModalView>
      </ModalBackground>
    </>
  );
};

Modal1.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

Modal1.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};

export default Modal1;

const ModalBackground = styled.div`
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
const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 300px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-family: 'PretendardRegular';
    font-size: 1.5rem;
  }
  p {
    margin-top: 15px;
    font-family: 'SCDream3';
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;
