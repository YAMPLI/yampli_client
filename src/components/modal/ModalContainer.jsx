import { useSelector } from 'react-redux';
import { modalSelector } from '../../store/modalSlice';

const ModalContainer = () => {
  const modals = useSelector(modalSelector);

  return (
    <>
      {modals.map((modal) => (
        <Modal {...modal}></Modal>
      ))}
    </>
  );
};
export default ModalContainer;
