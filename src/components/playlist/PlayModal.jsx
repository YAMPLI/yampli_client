import styled from 'styled-components';
import Button from '../common/Button';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { __getPlaylist } from '../../store/playlistSlice';

const PlayModal = ({ data, close }) => {
  const dispatch = useDispatch();
  const onPlaylist = () => {
    dispatch(__getPlaylist(data.playlistId));
    close();
  };

  const goBack = () => {
    close();
  };
  return (
    <>
      <ModalView>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <ButtonGroup>
          <ShortMarginButton onClick={onPlaylist}>
            {data.confirmText}
          </ShortMarginButton>
          <ShortMarginButton onClick={goBack} color="offWhite">
            {data.cancelText}
          </ShortMarginButton>
        </ButtonGroup>
      </ModalView>
    </>
  );
};

PlayModal.propTypes = {
  data: PropTypes.object,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

PlayModal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};

export default PlayModal;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  height: 300px;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.color.background.main};
  border-radius: 2px;
  z-index: 999;

  h3 {
    margin: 0;
    font-family: 'PretendardRegular';
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.text.main};
  }
  p {
    margin-top: 3px;
    font-family: 'pretendard';
    font-size: 1rem;
    color: ${(props) => props.theme.color.text.sub};
  }
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;
