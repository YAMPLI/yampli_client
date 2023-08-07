import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGroupList } from '../../store/groupSlice';
import { __getPlaylist } from '../../store/playlistSlice';
import GroupModal from './GroupModal';
import GroupEle from './GroupEle';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ModalContainer from '../modal/ModalContainer';

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

  return (
    <>
      {groupList.length === 0 ? (
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
        </EmptyGroup>
      ) : (
        <GroupListWrap>
          {groupList.map((list) => (
            <GroupEle
              key={list._id}
              title={list.title}
              onClick={() => {
                navigate(`/playlist/${list._id}`);
              }}
            />
          ))}
        </GroupListWrap>
      )}
    </>
  );
};

export default GroupList;

const EmptyGroup = styled.div`
  ${({ theme: { MoveCenter, FlexColumn } }) => css`
    ${MoveCenter}
    ${FlexColumn}
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
  ${({ theme: { FlexCenter, FlexColumn } }) => css`
    ${FlexCenter}
    ${FlexColumn}
  `}
  padding : 15px 250px;
`;
