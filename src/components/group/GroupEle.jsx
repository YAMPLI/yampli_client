import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../common/Text';

const GroupEle = ({ group, onClick, itemWidthRatio }) => {
  // 그룹 정보
  const { title, user, imageUrl } = group;
  console.log(itemWidthRatio);
  // 유저 정보 4명만 출력
  const sliceUser = user.length > 4 ? user.slice(0, 4) : user;
  return (
    <GroupBody className="groupBody" onClick={onClick}>
      <GroupImageContainer itemWidthRatio={itemWidthRatio}>
        <GroupImage
          src={
            'http://k.kakaocdn.net/dn/dikdw0/btslImOovZq/sNwgIS4QieqI0FOJVRUFV0/img_110x110.jpg'
          }
          alt={title}
          itemWidthRatio={itemWidthRatio}
        />
      </GroupImageContainer>
      <GroupContentContainer>
        <GroupName>{title}</GroupName>
        <GroupName>{title}</GroupName>
        <GroupUserList>
          참여자 : {sliceUser.join(', ')}
          {sliceUser.length > 4 && '...'}
        </GroupUserList>
      </GroupContentContainer>
    </GroupBody>
  );
};

export default GroupEle;

const GroupBody = styled.div`
  ${({ theme }) => theme.FlexItemCenterColumn}
  width : 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const GroupImageContainer = styled.div`
  width: 100%;
  height: ${({ itemWidthRatio }) => `${itemWidthRatio * 0.35}vw`};
  overflow: hidden;
`;

const GroupImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const GroupContentContainer = styled.div`
  display: grid;
  // 3개의 그리드로 텍스트 칸 나누기 -> 가로 줄 2개
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  // 그리드 높이 설정
  height: 200px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const GroupName = styled(Text).attrs({
  font: 'large',
  size: '1.1vw',
})`
  margin-bottom: 0.5rem;
`;

const GroupUserList = styled(Text).attrs({
  font: 'small',
  size: '0.6vw',
  color: 'softGray',
})`
  margin-bottom: 0.5rem;
`;

GroupEle.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};

GroupEle.defaultProps = {
  children: null,
  onClick: () => {},
};
