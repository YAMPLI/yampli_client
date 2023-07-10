import './modalBasic.modul.scss';
const ModalButton = ({ title, onClickHandler }) => {
  return (
    <button type="button" class="btn btn-secondary" onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default ModalButton;
