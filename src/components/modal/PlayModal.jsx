import styled from 'styled-components';
import Button from '../common/Button';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal } from '../../store/modalSlice';
import { __getPlaylist } from '../../store/playlistSlice';

const Modal = ({ title, content, confirmText, cancelText, close }) => {
  const dispatch = useDispatch();
  const { playlistId } = useSelector(selectModal);
  const onPlaylist = () => {
    dispatch(__getPlaylist(playlistId));
    close();
  };

  const goBack = () => {
    close();
  };
  return (
    <>
      <ModalView>
        <h3>{title}</h3>
        <p>{content}</p>
        <ButtonGroup>
          <ShortMarginButton onClick={onPlaylist} color="lightOrange">
            {confirmText}
          </ShortMarginButton>
          <ShortMarginButton onClick={goBack} color="lightOrange">
            {cancelText}
          </ShortMarginButton>
        </ButtonGroup>
      </ModalView>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
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

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
