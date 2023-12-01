import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __addGroup } from '../../store/groupSlice';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

const GroupModal = ({ setModalOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(''); // title 초기값 빈 문자열
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
    <ModalView>
      <h3>그룹 이름 작성</h3>
      <StyledInput
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      {title == '' && title.length <= 2 && (
        <Warning>그룹 이름은 2글자 이상이어야 합니다.</Warning>
      )}
      {title && title.length > 11 && (
        <Warning>그룹 이름은 10글자 이하이어야 합니다.</Warning>
      )}
      <ButtonGroup>
        <ShortMarginButton
          onClick={createGroup}
          disabled={title.length <= 2 || title.length > 10}
        >
          그룹생성
        </ShortMarginButton>
        <ShortMarginButton onClick={closeModal} color="lightBlue">
          로그아웃
        </ShortMarginButton>
      </ButtonGroup>
    </ModalView>
  );
};

export default GroupModal;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 300px;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.color.background.main};
  border-radius: 2px;
  z-index: 999;

  h3 {
    margin: 0;
    font-family: 'PretendardRegular';
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
  background: linear-gradient(to right, #9b2def, #2dceef);

  & + & {
    margin-left: 0.5rem;
  }
  &:disabled {
    background-color: ${(props) =>
      props.theme.color.text
        .sub}; // 비활성화 상태일 때의 배경색을 회색으로 변경
  }
`;
const StyledInput = styled.input`
  width: 70%; // 너비를 부모 컴포넌트 기준
  height: 50px;
  padding: 10px; // 내부 패딩을 설정, 입력 칸 넓이
  margin-top: 20px; // 위쪽 마진을 설정
  background-color: transparent; // 입력 창 배경 없애기
  border-radius: 5px; // 테두리 둥글게 처리
  border: 1px solid ${(props) => props.theme.color.button.gradientEnd}; // 테두리 색상을 설정합니다.
  border-width: 0 0 1px; // 아래 테두리만 남기기
  font-size: 16px; // 글자 크기를 설정합니다.
  &:focus {
    // 입력 중일 때의 스타일을 설정합니다.
    border: 2px solid;
    border-color: ${(props) =>
      props.theme.color.button.gradientEnd}; // 테두리 색상을 변경합니다.
  }
`;

const Warning = styled.p`
  color: ${(props) => props.theme.color.text.alert};
  font-size: 15px;
  margin-top: 5px;
`;
