import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGroupList } from '../../store/groupSlice';
import { __getPlaylist } from '../../store/playlistSlice';
import GroupModal from './GroupModal';
import GroupEle from './GroupEle';
import Sidebar from '../common/Siderbar';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ModalContainer from '../modal/ModalContainer';

// 사이드바 테스트 데이터
const temporaryGroupData = [
  { id: 1, name: '그룹 1' },
  { id: 2, name: '그룹 2' },
  { id: 3, name: '그룹 3' },
  { id: 4, name: '그룹 4' },
  { id: 5, name: '그룹 5' },
];

const GroupList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const groupList = useSelector((state) => state.group.list);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(__getGroupList());
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const sidebarItems = temporaryGroupData.map((group) => ({
    label: group.name,
    onClick: () => {
      console.log(`${group.name} 클릭됨!`);
      // 필요한 경우 여기에 추가 로직을 넣을 수 있습니다.
    },
  }));

  return (
    <GroupPageContainer>
      <Sidebar items={sidebarItems} />
      <GroupContainer className="groupContainer">
        {groupList.length === 0 ? (
          <EmptyGroupList
            openModal={openModal}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        ) : (
          <FindGroupList groupList={groupList} navigate={navigate} />
        )}
      </GroupContainer>
    </GroupPageContainer>
  );
};

const EmptyGroupList = ({ openModal, modalOpen, setModalOpen }) => {
  <EmptyGroup>
    <EmptyGroupText>
      소속된 그룹이 없습니다. 그룹 생성 버튼을 눌러주세요.
    </EmptyGroupText>
    <GroupCreateButton onClick={openModal}>그룹생성</GroupCreateButton>
    {modalOpen && (
      <ModalContainer>
        <GroupModal setModalOpen={setModalOpen} />
      </ModalContainer>
    )}
  </EmptyGroup>;
};

const FindGroupList = ({ groupList, navigate }) => (
  <GroupListWrap className="GroupListWrap">
    {groupList.map((group) => (
      <GroupEleWrap key={group._id}>
        <GroupEle
          group={group}
          onClick={() => {
            navigate(`/playlist/${group._id}`);
          }}
        />
      </GroupEleWrap>
    ))}
  </GroupListWrap>
);

export default GroupList;
// 사이드바와 그룹을 보여주는 그룹 페이지 컨테이너를 모두 포함하는 최상단 컨테이너 역할을 하도록 한다.
const GroupPageContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 0px 250px;
`;
const GroupContainer = styled.div`
  /* padding: 0px 250px;
  margin-top: 15px; */
  flex: 1;
`;

const EmptyGroup = styled.div`
  ${({ theme: { FlexItemCenterColumn } }) => css`
    ${FlexItemCenterColumn}
    width: 100%;
    height: 100%;
  `}
`;
const EmptyGroupText = styled.p`
  ${({ theme: { Font } }) => css`
    ${Font('SCDream4', 20)}
  `}
  margin: 0;
  color: ${({ theme }) => theme.color.offWhite};
`;

const GroupCreateButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.offWhite};
  background: linear-gradient(to right, #9b2def, #2dceef);
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.lightBlue};
  }
`;

const GroupListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  /* ${({ theme: { FlexCenterColumn } }) => css`
    ${FlexCenterColumn}
  `} */
`;

const GroupEleWrap = styled.div`
  width: 25%;
  padding: 0.5rem;
  box-sizing: border-box;
`;
