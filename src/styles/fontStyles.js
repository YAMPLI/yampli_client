import { css } from 'styled-components';

// 폰트 스타일 정의
const fontStyles = {
  small: {
    fontSize: '14px',
  },
  medium: {
    fontSize: '16px',
  },
  large: {
    fontSize: '18px',
  },
  alert: {
    fontFamily: 'SCDream4',
    fontSize: '16px',
  },
};

// 기본 폰트 스타일 -> pretendar 기본폰트
const defaultFontStyle = {
  fontFamily: 'pretendard',
  ...fontStyles.medium,
};

// 폰트 스타일 반환하는 함수
export const Font = (name, size) => {
  const fontStyle = { ...defaultFontStyle, ...fontStyles[name] };
  const fontSize = size || fontStyle.fontSize;
  return css`
    font-family: ${fontStyle.fontFamily};
    font-size: ${fontSize};
  `;
};

// 사용 가능 폰트
export const fonts = {
  primary: 'pretendard',
  alert: 'SCDream4',
};

// 폰트 크기
export const fontSizes = {
  small: '14px',
  medium: '16px',
  large: '18px',
};

// 줄 간격
export const lineHeights = {
  small: '1.2',
  medium: '1.4',
  large: '1.6',
};
