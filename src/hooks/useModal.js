import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../store/modalSlice';

const useModal = () => {
  const dispatch = useDispatch();

  const modalOpen = (data) => {
    dispatch(openModal(data));
  };

  const modalClose = () => {
    dispatch(closeModal());
  };
  return { modalOpen, modalClose };
};

export default useModal;
