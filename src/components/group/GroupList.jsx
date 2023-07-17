import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGroupList } from '../../store/groupSlice';
import { __getPlaylist } from '../../store/playlistSlice';
import GroupModal from './GroupModal';
import GroupCard from './GroupCard';
import { useNavigate } from 'react-router-dom';

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
    <div>
      {console.log(groupList)}
      {groupList.length === 0 ? (
        <div>
          <p>소속된 그룹이 없습니다. 그룹 생성 버튼을 눌러주세요.</p>
          <button onClick={openModal}>그룹생성</button>
          {modalOpen && <GroupModal setModalOpen={setModalOpen} />}
        </div>
      ) : (
        groupList.map((list) => {
          // onClickGroup() : 렌더링되면서 바로 함수가 실행되버린다
          // onClickGrup로 클릭 이벤트만 설정하고 useState로 상태 동적 관리
          return (
            <GroupCard
              key={list._id}
              title={list.title}
              onClick={() => {
                navigate(`/playlist/${list._id}`);
              }}
            ></GroupCard>
          );
        })
        // <div>{groupList}</div>
      )}
    </div>
  );
};

export default GroupList;
