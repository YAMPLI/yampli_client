import PropTypes from 'prop-types';
import styles from './group.module.scss';
const GroupCard = ({ title, onClick, children }) => {
  return (
    <div className={`${styles.cardBody} cursor-pointer`} onClick={onClick}>
      <div className={styles.cardImage}> 이미지 박스</div>
      <div className={styles.cardContent}>{title}</div>
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
