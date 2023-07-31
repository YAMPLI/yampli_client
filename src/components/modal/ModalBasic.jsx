import styled from 'styled-components';
import Button from '../common/Button';
import PropTypes from 'prop-types';

const Modal = ({
  title,
  content,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <>
      <ModalBackground>
        <ModalView onClick={(e) => e.stopPropagation()}>
          <h3>{title}</h3>
          <p>{content}</p>
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

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  cancelText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

Modal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};

export default Modal;

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
