import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
const GroupEle = ({ title, onClick, children }) => {
  return (
    <GroupBody onClick={onClick}>
      <GroupImage>이미지박스</GroupImage>
      <GroupContent>타이틀</GroupContent>
    </GroupBody>
  );
};

export default GroupEle;

const GroupBody = styled.div`
  ${({ theme: { FlexCenter } }) => css`
     {
      ${FlexCenter}
    }
  `}
  height: 130px;
  padding: 15px;
  cursor: pointer;
`;

const GroupImage = styled.div`
  width: 130px;
  background-color: blue;
`;

const GroupContent = styled.div`
  ${({ theme: { MoveCenter } }) => css`
     {
      ${MoveCenter}
    }
  `}
  background-color: white;
  width: 450px;
`;

GroupEle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

GroupEle.defaultProps = {
  children: null,
  onClick: () => {},
};
