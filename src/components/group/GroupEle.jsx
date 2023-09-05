import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  ${({ theme: { FlexItemCenterColumn } }) => css`
     {
      ${FlexItemCenterColumn}
    }
  `}
  width : 100%;
  padding: 1rem;
  border-radius: 5px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const GroupImage = styled.img`
  width: 80px;
  height: 80px; // 이미지 크기 설정
  border-radius: 5px;
`;

const GroupContent = styled.div`
  /* ${({ theme: { FlexItemCenter } }) => css`
     {
      ${FlexItemCenter}
    }
  `}
  background-color: white;
  width: 350px;
  height: 80px; // 제목 높이 설정
  line-height: 130px; // 텍스트를 중앙에 위치시키기 위한 설정
  font-size: 1.2rem; // 폰트 크기 설정 */
  margin-top: 1rem;
`;

const GroupName = styled.h3`
  ${({ theme: { Font } }) => css`
    ${Font('pretendar', 18)}
  `}
  margin:0;
  color: ${({ theme }) => theme.color.offWhite};
`;

const GroupUserList = styled.p`
  ${({ theme: { Font } }) => css`
    ${Font('pretendar', 14)}
  `}
  margin: 0;
  color: ${({ theme }) => theme.color.gray};
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
