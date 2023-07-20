import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../store/modalSlice';

const useModal = () => {
  const dispatch = useDispatch();

  const handleOpenModal = ({ props }) => {
    dispatch(openModal({ props }));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
};

export default useModal;
