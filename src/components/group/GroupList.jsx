import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getGroupList } from '../../store/groupSlice';
import GroupModal from './GroupModal';
import GroupCard from './GroupCard';

const GroupList = () => {
  const dispatch = useDispatch();
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
          return <GroupCard key={list._id} title={list.groupName}></GroupCard>;
        })
        // <div>{groupList}</div>
      )}
    </div>
  );
};

export default GroupList;
