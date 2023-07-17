import './modalBasic.modul.scss';
import ModalButton from './ModalButton';

const ModalBasic = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
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
