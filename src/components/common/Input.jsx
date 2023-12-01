import React from 'react';
import styled from 'styled-components';

const Input = ({ inputRef, value, onChange, ...props }) => {
  return (
    <InputStyle {...props} ref={inputRef} value={value} onChange={onChange} />
  );
};

Input.defaultProps = {
  padding: '0px', // 와이어프레임의 정확한 크기를 유지하기 위해 패딩을 0으로 설정
  margin: '3px',
  borderR: '0px', // 와이어프레임에 따라 보더 반경이 없으므로 0으로 설정
  border: '1px solid',
  bg: 'transparent',
  ts: '.2s ease', // 전환 효과 걸리는 시간 2초, ease: 타이밍 함수. 시작과 끝의 느린 속도.
  w: '100%', // 와이어프레임에 지정된 너비
  h: '25px', // 와이어프레임에 지정된 높이
  //   fontsize: '14px', // 텍스트 크기
  onChange: () => {}, // 함수 이름 수정
};

const InputStyle = styled.input`
  ${(props) => props.theme.FlexCenter};

  width: ${(props) => props.w};
  height: ${(props) => props.h};
  font-size: ${(props) => props.fontsize};

  //기본 값
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bg};
  transition: ${(props) => props.ts};
  color: ${(props) => props.theme.color.text.main};
  ${(props) => props.theme.Font('small')}

  // 플레이스홀더 스타일
  &::placeholder {
    color: ${(props) =>
      props.theme.color.text.sub}; // 예시 값, 실제 스타일에 맞게 조정 필요
    ${(props) => props.theme.Font('small')}
  }
`;

export default Input;
