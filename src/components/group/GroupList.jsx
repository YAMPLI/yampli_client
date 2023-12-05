import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGroupList } from '../../store/groupSlice';
import { __getPlaylist } from '../../store/playlistSlice';
import { darken, lighten } from 'polished';
import GroupModal from './GroupModal';
import GroupEle from './GroupEle';
import SearchBar from '../common/SearchBar';
import Sidebar, { SidebarItem } from '../common/Siderbar';
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
    console.log(groupList.length);
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
    <GroupPageContainer className="groupPageContainer">
      {groupList.length !== 0 && (
        <SidebarContainer>
          <GroupPageSidebar items={sidebarItems} />
        </SidebarContainer>
      )}
      <GroupContainer
        className="groupContainer"
        groupListLength={groupList.length}
      >
        {groupList.length !== 0 && (
          <GroupHeader>
            <span>그룹 목록</span>
            <GroupSearchBar />
          </GroupHeader>
        )}
        {groupList.length !== 0 ? (
          <FindGroupList
            groupList={groupList}
            navigate={navigate}
            itemsPerRow={4}
          />
        ) : (
          <EmptyGroupList
            openModal={openModal}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </GroupContainer>
    </GroupPageContainer>
  );
};

const EmptyGroupList = ({ openModal, modalOpen, setModalOpen }) => {
  return (
    <EmptyGroup className="emptyGroup">
      <span>소속된 그룹이 없습니다. 그룹 생성 버튼을 눌러주세요.</span>
      <GroupCreateButton onClick={openModal}>그룹생성</GroupCreateButton>
      {modalOpen && (
        <ModalContainer>
          <GroupModal setModalOpen={setModalOpen} />
        </ModalContainer>
      )}
    </EmptyGroup>
  );
};

const FindGroupList = ({ groupList, navigate, itemsPerRow }) => {
  const emptySlots = itemsPerRow - (groupList.length % itemsPerRow);

  return (
    <GroupListWrap className="GroupListWrap" itemsPerRow={itemsPerRow}>
      {groupList.map((group) => (
        <GroupEleWrap
          key={group._id}
          itemsCount={groupList.length}
          itemsPerRow={itemsPerRow}
        >
          <GroupEle
            group={group}
            onClick={() => {
              navigate(`/playlist/${group._id}`);
            }}
            itemWidthRatio={100 / itemsPerRow}
          />
        </GroupEleWrap>
      ))}
      {Array.from({ length: emptySlots }).map((_, idx) => (
        <EmptySlot key={`empty-${idx}`} itemsPerRow={itemsPerRow} />
      ))}
    </GroupListWrap>
  );
};
export default GroupList;
// 사이드바와 그룹을 보여주는 그룹 페이지 컨테이너를 모두 포함하는 최상단 컨테이너 역할을 하도록 한다.
const GroupPageContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 32px 250px;

  // 첫 번째 자식 요소로 들어오는 컴포넌트는 패딩이 적용되지 않도록 설정
  /* & > *:not(:first-child) {
    padding: 0 250px;
  } */
`;

const SidebarContainer = styled.div`
  width: 21.875rem;
`;

const GroupPageSidebar = styled(Sidebar)`
  ${SidebarItem} {
    ${(props) => props.theme.color.text.alert}
  }
`;

const GroupContainer = styled.div`
  padding: 0px 6.25rem;
  // siderbar와 나란히 배치중이기 때문에 그룹이 존재하지 않은 경우에 레이아웃의 반만 사용되고있다.
  // 그룹리스트가 존재하지 않는 경우 width 전체를 사용하도록 한다.
  ${({ groupListLength }) => groupListLength !== 0 && `width: 100%;`}
`;

const GroupSearchBar = styled(SearchBar)`
  margin-right: 0.5rem;
`;
const GroupHeader = styled.div`
  ${(props) => props.theme.FlexCenter}
  justify-content: space-between;
  margin-bottom: 2rem;
  span {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const EmptyGroup = styled.div`
  ${(props) => props.theme.FlexItemCenterColumn}
  width: 100%;
  height: 100%;
  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.color.alert};
  }
`;

const GroupCreateButton = styled.button`
  position: relative;
  margin-top: 1.5rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  background: linear-gradient(
    to right,
    ${({ theme }) => darken(0.1, theme.color.button.gradientStart)},
    ${({ theme }) => darken(0.1, theme.color.button.gradientEnd)}
  );
  border: none;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      to right,
      ${({ theme }) => darken(0.1, theme.color.button.gradientStart)},
      ${({ theme }) => darken(0.1, theme.color.button.gradientEnd)}
    );
  }

  &:active {
    background: linear-gradient(
      to right,
      ${({ theme }) => darken(0.1, theme.color.button.gradientStart)},
      ${({ theme }) => darken(0.1, theme.color.button.gradientEnd)}
    );
  }
`;

const GroupListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(${({ itemsPerRow }) => `100% / ${itemsPerRow}`}), auto)
  );
`;

const GroupEleWrap = styled.div`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const EmptySlot = styled.div`
  width: ${({ itemsPerRow }) => `${100 / itemsPerRow}%`};
  padding: 0.5rem;
  box-sizing: border-box;
`;
