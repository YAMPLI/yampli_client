import PropTypes from 'prop-types';

const GroupCard = ({ title, onClick, children }) => {
  return (
    <div className="card mb-3 cursor-pointer" onClick={onClick}>
      <div className="card-body py-2 d-flex align-items-center">
        <div className="flex-grow-1">{title}</div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

export default GroupCard;

GroupCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

GroupCard.defaultProps = {
  children: null,
  onClick: () => {},
};
