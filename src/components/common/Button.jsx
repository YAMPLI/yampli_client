import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
Button.defaultProps = {
  h: '1.75rem',
  padding: '0.5rem 2rem',
  margin: '0.2rem 0 0 0',
  borderR: '4px',
  border: 'none',
  fontW: 500,
  fontS: '0.875rem',
  ts: '.1s ease',
  onClick: () => {},
};
const StyledButton = styled.button`
  ${(props) => props.theme.FlexItemCenter};

  //기본 값
  height: ${(props) => props.h};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border};
  font-weight: ${(props) => props.fontW};
  font-size: ${(props) => props.fontS};
  transition: ${(props) => props.ts};
  cursor: pointer;
  background: linear-gradient(
    to right,
    rgba(155, 45, 239, 1),
    rgba(45, 206, 239, 1)
  );

  &:hover {
    background: linear-gradient(
      to left,
      rgba(155, 45, 239, 0.8),
      rgba(45, 206, 239, 0.8)
    );
  }

  // disabled 상태
  &:disabled {
    background: ${(props) =>
      props.theme.color.button.disabled}; // 비활성화 상태일 때의 배경 색상
    cursor: not-allowed; // 커서를 not-allowed로 변경
  }
  // SearchBar
  ${(props) =>
    props.search &&
    css`
      width: 3rem;
      height: 2.5rem;
      padding: 0;
      margin: 0;
      background: ${(props) => props.theme.color.background.main};
      font-family: 'scdream4';
      border-radius: 0px 4px 4px 0px;
    `}

  // createGroup
  ${(props) =>
    props.group &&
    css`
      position: relative;
      margin-top: 1.5rem;
    `}

    // errorBoundary
    ${(props) =>
    props.boundary &&
    css`
      width: 60%;
      height: 2.75rem;
      margin: 1.875rem 0;
      font-weight: 500;
    `}

    ${(props) =>
    props.signUp &&
    css`
      width: 100%;
      height: 2.75rem;
    `}
`;

export default Button;

export const LoginButton = ({ children, ...props }) => {
  return <StyledLoginButton {...props}>{children}</StyledLoginButton>;
};

const StyledLoginButton = styled(Button)`
  width: 100%;
  height: 2.75rem;

  ${(props) =>
    props.kakao &&
    css`
      color: ${(props) => props.kakao && props.theme.color.background.default};
      background: ${(props) => props.kakao && '#feeb4a'};
      font-weight: 500;
      line-height: 3rem;
      &:hover {
        background: ${(props) => props.kakao && 'rgb(254, 235, 74, 0.9)'};
      }
      img {
        margin-right: 0.375rem;
        max-width: 100%;
        max-height: 100%;
        vertical-align: top;
      }
    `}
`;
