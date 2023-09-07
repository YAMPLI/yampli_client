import React from 'react';
import styled, { css } from 'styled-components';

const fontStyles = css`
  ${(props) => props.theme.Font(props.font, props.size)}
`;

// as prop를 사용해서 p태그가 아닌 다른 태그에서도 사용 가능하도록 한다.
const Text = ({ children, font, size, color, as = 'p', ...rest }) => {
  return (
    <StyledText as={as} font={font} size={size} color={color} {...rest}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  font: 'medium', // 기본 폰트 스타일을 'medium'으로 설정
  size: undefined, // size prop이 전달되지 않으면 Font 함수에서 기본값을 사용
  color: 'offWhite',
};

export default Text;

// prop로 받아온 color 가져옴
const StyledText = styled.p`
  ${fontStyles}
  color: ${({ theme, color }) => theme.color[color]};
`;
