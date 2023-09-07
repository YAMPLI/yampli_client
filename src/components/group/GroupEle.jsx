import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../common/Text';

const GroupEle = ({ group, onClick }) => {
  // 그룹 정보
  const { title, user, imageUrl } = group;

  // 유저 정보 4명만 출력
  const sliceUser = user.length > 4 ? user.slice(0, 4) : user;
  return (
    <GroupBody className="groupBody" onClick={onClick}>
      <GroupImage
        src={
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg'
        }
        alt={title}
      />
      <GroupContent>
        <GroupName>{title}</GroupName>
        <GroupUserList>
          참여자 : {sliceUser.join(', ')}
          {sliceUser.length > 4 && '...'}
        </GroupUserList>
      </GroupContent>
    </GroupBody>
  );
};

export default GroupEle;

const GroupBody = styled.div`
  ${({ theme }) => theme.FlexItemCenterColumn}
  width : 100%;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const GroupImage = styled.img`
  width: 80px;
  height: 80px; // 이미지 크기 설정
  border-radius: 5px;
`;

const GroupContent = styled.div`
  margin-top: 1rem;
`;

const GroupName = styled(Text).attrs({
  font: 'large',
})`
  margin: 0;
`;

const GroupUserList = styled(Text).attrs({
  font: 'small',
  color: 'gray',
})`
  margin: 0;
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
