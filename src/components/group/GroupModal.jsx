import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addGroup } from '../../store/groupSlice';
import './groupModal.scss';

const GroupModal = ({ setModalOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const user = useSelector((state) => state.group);

  const closeModal = () => {
    setModalOpen(false);
  };
  const createGroup = () => {
    console.log(title);
    dispatch(__addGroup(title));
    console.log(user);
    setModalOpen(false);
  };
  return (
    <div id="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">그룹 이름 작성</h5>
          </div>
          <div class="modal-body">
            <textarea
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onClick={createGroup}>
              그룹 생성
            </button>
            <button class="btn btn-secondary" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupModal;
