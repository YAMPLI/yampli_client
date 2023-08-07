import { Font } from './fontStyles';
import { MoveCenter, FlexCenter, FlexColumn, FlexBetween } from './flexStyles';

const color = {
  dark: '#161a1a', // 헤더, 배경
  deepGray: '#303033', // 그룹 리스트
  lightGray1: '#d5d5d5', // view all 버튼 등등 ...
  charcoalGray: '#3a3a3d', // 플레이 프로그레스바, 선택된 그룹 강조
  softGray: '#99999f', // 작은 텍스트, 아티스트, 제목, 좋아요 수 ...
  lightBlue: '#2dceef', // 경계선, 구분선
  mediumBlue: '#2d9bef',
  lightPurple: '#9b2def',
  darkGray1: '#424346', // footer, 비활성 버튼
  white: '#FFFFFF',
  offWhite: '#FAFAFA', // 주요 텍스트
  red: '#FF3E29', // 경고
};

const media = {
  half: '(max-width: 800px)',
  full: '(min-width: 801px)',
};
const theme = {
  color,
  MoveCenter,
  FlexCenter,
  FlexColumn,
  FlexBetween,
  media,
  Font,
};

export default theme;
/* Color Theme Swatches in Hex */
