import './modalBasic.modul.scss';
import ModalButton from './ModalButton';

const ModalBasic = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <ModalButton
              title={'닫기'}
              onClickHandler={closeModal}
            ></ModalButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBasic;
